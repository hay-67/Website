(function () {

    "use strict";

    const accordion = document.querySelector(".faq-accordion");
    if (!accordion) { return; }

    const triggers = Array.from(accordion.querySelectorAll(".faq-trigger"));

    // Open or close one question
    function setOpen(trigger, open) {
    const panel = document.getElementById(
        trigger.getAttribute("aria-controls")
    );

    if (!panel) { return; }

    trigger.setAttribute("aria-expanded", String(open));
    trigger.parentElement.parentElement.classList.toggle("is-open", open);
    panel.hidden = !open;
    }

    triggers.forEach(function (trigger, index) {

        trigger.addEventListener("click", function () {
            const willOpen = trigger.getAttribute("aria-expanded") !== "true";

            // Close every other answer so only one is open at a time
            triggers.forEach(function (other) {
                if (other !== trigger) { setOpen(other, false); }
            });

            setOpen(trigger, willOpen);
        });

        // Arrow keys move focus between questions
        trigger.addEventListener("keydown", function (event) {
            let target = null;

            if (event.key === "ArrowDown") { target = triggers[(index + 1) % triggers.length]; }
            if (event.key === "ArrowUp")   { target = triggers[(index - 1 + triggers.length) % triggers.length]; }
            if (event.key === "Home")      { target = triggers[0]; }
            if (event.key === "End")       { target = triggers[triggers.length - 1]; }

            if (target) {
                event.preventDefault();
                target.focus();
            }
        });
    });

})();