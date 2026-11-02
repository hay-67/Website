(function () {

    "use strict";

    // Where applications are emailed (change here if needed)
    const RECIPIENT = "info@neonnexus.co.za";

    const PLANS = {
        student: { name: "Student Membership", price: 99 },
        premium: { name: "Premium Membership", price: 199 },
        vip:     { name: "VIP Membership",     price: 299 }
    };

    const form = document.getElementById("membershipForm");
    if (!form) { return; }

    const result = document.getElementById("membershipResult");

    const nameInput    = document.getElementById("fullname");
    const emailInput   = document.getElementById("email");
    const phoneInput   = document.getElementById("phone");
    const planSelect   = document.getElementById("membership-type");
    const commentInput = document.getElementById("comments");

    /* ---------- Helpers ---------- */

    function el(tag, className, text) {
        const node = document.createElement(tag);
        if (className) { node.className = className; }
        if (text !== undefined) { node.textContent = text; }
        return node;
    }

    function setError(input, message) {
        const error = document.getElementById(input.id + "Error");
        error.textContent = message;
        if (message) {
            input.setAttribute("aria-invalid", "true");
        } else {
            input.removeAttribute("aria-invalid");
        }
        return message === "";
    }

    /* ---------- Validation ---------- */

    const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const NAME_PATTERN  = /^[\p{L}][\p{L}\s'.-]*$/u;

    // South African numbers: 0XXXXXXXXX, +27XXXXXXXXX or 0027XXXXXXXXX
    const PHONE_PATTERN = /^(\+27|0027|0)\d{9}$/;

    const validators = {

        fullname: function () {
            const value = nameInput.value.trim();
            if (value.length < 2) {
                return setError(nameInput, "Please enter your full name (at least 2 characters).");
            }
            if (!NAME_PATTERN.test(value)) {
                return setError(nameInput, "Names can only contain letters, spaces, apostrophes, full stops and hyphens.");
            }
            return setError(nameInput, "");
        },

        email: function () {
            const value = emailInput.value.trim();
            if (value === "") {
                return setError(emailInput, "Please enter your email address.");
            }
            if (!EMAIL_PATTERN.test(value)) {
                return setError(emailInput, "Please enter a valid email address, for example name@example.com.");
            }
            return setError(emailInput, "");
        },

        phone: function () {
            const raw = phoneInput.value.trim();
            if (raw === "") {
                return setError(phoneInput, "Please enter your phone number.");
            }
            if (!PHONE_PATTERN.test(raw.replace(/[\s\-()]/g, ""))) {
                return setError(phoneInput, "Please enter a valid South African number, for example 041 123 4567 or +27 82 123 4567.");
            }
            return setError(phoneInput, "");
        },

        "membership-type": function () {
            if (planSelect.value === "") {
                return setError(planSelect, "Please choose a membership plan.");
            }
            return setError(planSelect, "");
        },

        comments: function () {
            if (commentInput.value.length > 300) {
                return setError(commentInput, "Please keep your comments under 300 characters.");
            }
            return setError(commentInput, "");
        }
    };

    // Check a field when the visitor leaves it, and re-check while they fix it
    Object.keys(validators).forEach(function (id) {
        const input = document.getElementById(id);

        input.addEventListener("blur", validators[id]);

        function recheck() {
            if (input.getAttribute("aria-invalid") === "true") { validators[id](); }
        }

        input.addEventListener("input", recheck);
        input.addEventListener("change", recheck);
    });

    /* ---------- Pre-select the plan from the plan cards ---------- */

    document.querySelectorAll(".tier-button").forEach(function (button) {
        button.addEventListener("click", function () {
            const card = button.closest(".membership-tier");
            const title = card ? card.querySelector("h3").textContent.toLowerCase() : "";

            Object.keys(PLANS).forEach(function (key) {
                if (title.indexOf(key) === 0) {
                    planSelect.value = key;
                    setError(planSelect, "");
                }
            });
        });
    });

    /* ---------- Confirmation card ---------- */

    function showResult(data, reference) {

        const plan = PLANS[data.plan];

        const subject = "Membership application: " + plan.name + " (" + reference + ")";
        const body =
            "Hello NEON NEXUS team,\r\n\r\n" +
            "I would like to apply for a membership.\r\n\r\n" +
            "Name: " + data.name + "\r\n" +
            "Email: " + data.email + "\r\n" +
            "Phone: " + data.phone + "\r\n" +
            "Plan: " + plan.name + " (R" + plan.price + " per month)\r\n" +
            "Comments: " + (data.comments || "None") + "\r\n" +
            "Reference: " + reference + "\r\n\r\n" +
            "Kind regards,\r\n" + data.name;

        result.replaceChildren();

        result.appendChild(el("p", "result-ref", "APPLICATION READY / REF " + reference));
        result.appendChild(el("h3", "", "Thank you, " + data.name.split(/\s+/)[0] + "!"));
        result.appendChild(el(
            "p",
            "",
            "Your " + plan.name + " application is ready. Press the button below to " +
            "email it to " + RECIPIENT + "."
        ));

        const list = el("dl", "result-details");
        [
            ["Plan", plan.name],
            ["Monthly cost", "R" + plan.price],
            ["6 months", "R" + plan.price * 6],
            ["12 months", "R" + plan.price * 12],
            ["Email", data.email],
            ["Phone", data.phone]
        ].forEach(function (row) {
            list.appendChild(el("dt", "", row[0].toUpperCase()));
            list.appendChild(el("dd", "", row[1]));
        });
        result.appendChild(list);

        result.appendChild(el(
            "p",
            "result-note",
            "Your application is only sent once you press send in your email app. Nothing has been sent yet."
        ));

        const actions = el("div", "result-actions");

        const send = el("a", "hero-button", "EMAIL MY APPLICATION \u2192");
        send.href = "mailto:" + RECIPIENT +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);
        actions.appendChild(send);

        const fresh = el("button", "secondary-button", "NEW APPLICATION");
        fresh.type = "button";
        fresh.addEventListener("click", reset);
        actions.appendChild(fresh);

        result.appendChild(actions);
        result.hidden = false;
    }

    function reset() {
        form.reset();
        Object.keys(validators).forEach(function (id) {
            setError(document.getElementById(id), "");
        });
        result.hidden = true;
        result.replaceChildren();
        form.hidden = false;
        nameInput.focus();
    }

    /* ---------- Submit ---------- */

    form.addEventListener("submit", function (event) {

        // Stop the page from reloading
        event.preventDefault();

        // Run every check so all problems show at once
        const checks = Object.keys(validators).map(function (id) {
            return { id: id, ok: validators[id]() };
        });

        const firstBad = checks.find(function (check) { return !check.ok; });

        if (firstBad) {
            document.getElementById(firstBad.id).focus();
            return;
        }

        const reference = "NN-M" + Date.now().toString(36).toUpperCase().slice(-5);

        showResult({
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            phone: phoneInput.value.trim(),
            plan: planSelect.value,
            comments: commentInput.value.trim()
        }, reference);

        form.hidden = true;
        result.scrollIntoView({ behavior: "smooth", block: "start" });
        result.focus({ preventScroll: true });
    });

})();