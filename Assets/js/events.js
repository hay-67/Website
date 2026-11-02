(function () {

    "use strict";

    // Where the event data lives (path is relative to Pages/events.html)
    const DATA_URL = "../Assets/data/events.json";

    const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
                    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    /* ---------- Element references ---------- */

    const list      = document.getElementById("eventList");
    const searchBox = document.getElementById("eventSearch");
    const category  = document.getElementById("eventCategory");
    const sortBy    = document.getElementById("eventSort");
    const showPast  = document.getElementById("eventPast");
    const count     = document.getElementById("eventCount");
    const clearBtn  = document.getElementById("eventClear");

    // Stop quietly if this script is loaded on a page without the event list
    if (!list) { return; }

    let events = [];

    /* ---------- Helpers ---------- */

    // Build an element with optional class and text (textContent keeps it safe)
    function el(tag, className, text) {
        const node = document.createElement(tag);
        if (className) { node.className = className; }
        if (text !== undefined) { node.textContent = text; }
        return node;
    }

    // "2026-11-14" -> a Date at local midnight (avoids time zone shifts)
    function parseDate(iso) {
        const parts = iso.split("-").map(Number);
        return new Date(parts[0], parts[1] - 1, parts[2]);
    }

    // Compare the event day with today's date on the visitor's device
    function statusOf(event) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const diff = parseDate(event.date) - today;
        if (diff < 0) { return "PAST"; }
        if (diff === 0) { return "TODAY"; }
        return "UPCOMING";
    }

    /* ---------- Build one event card ---------- */

    function buildCard(event, index) {

        const date   = parseDate(event.date);
        const status = statusOf(event);

        const card = el("article", "event-card");
        if (status === "PAST") { card.classList.add("is-past"); }

        // Stagger the entrance animation (only plays when the list changes)
        card.style.animationDelay = (index * 60) + "ms";

        // Date block
        const dateBox = el("div", "event-date");
        dateBox.appendChild(el("span", "", String(date.getDate()).padStart(2, "0")));
        dateBox.appendChild(el("small", "", MONTHS[date.getMonth()]));
        card.appendChild(dateBox);

        // Event details
        const info = el("div", "event-info");
        info.appendChild(el("p", "event-type", event.category.toUpperCase()));
        info.appendChild(el("h3", "", event.title));

        const when = el("p", "");
        const time = el("time", "", date.toLocaleDateString("en-ZA", {
            weekday: "short", day: "numeric", month: "short", year: "numeric"
        }));
        time.dateTime = event.date;
        when.appendChild(time);
        when.appendChild(document.createTextNode(" \u2022 " + event.time + " \u2022 " + event.venue));
        info.appendChild(when);
        card.appendChild(info);

        // Status pill
        const pill = el("span", "event-status", status);
        if (status === "PAST")  { pill.classList.add("is-past"); }
        if (status === "TODAY") { pill.classList.add("is-today"); }
        card.appendChild(pill);

        return card;
    }

    /* ---------- Filter, sort and draw ---------- */

    function render() {

        const term = searchBox.value.trim().toLowerCase();

        // 1. Filter
        let shown = events.filter(function (event) {
            if (!showPast.checked && statusOf(event) === "PAST") { return false; }
            if (category.value !== "all" && event.category !== category.value) { return false; }
            if (term !== "") {
                const text = (event.title + " " + event.category + " " + event.venue).toLowerCase();
                if (text.indexOf(term) === -1) { return false; }
            }
            return true;
        });

        // 2. Sort
        shown.sort(function (a, b) {
            if (sortBy.value === "title") { return a.title.localeCompare(b.title); }
            const difference = parseDate(a.date) - parseDate(b.date);
            return sortBy.value === "latest" ? -difference : difference;
        });

        // 3. Draw
        list.replaceChildren();

        if (shown.length === 0) {
            list.appendChild(el(
                "p",
                "event-empty",
                "No events match your search. Try a different word, choose All categories, or switch on past events."
            ));
        } else {
            shown.forEach(function (event, index) {
                list.appendChild(buildCard(event, index));
            });
        }

        // 4. Tell screen readers how many results there are (aria-live region)
        count.textContent = shown.length === 1
            ? "Showing 1 event"
            : "Showing " + shown.length + " events";

        // Only show the clear button when a filter is active
        clearBtn.hidden = (term === "" && category.value === "all" && sortBy.value === "soonest" && !showPast.checked);
    }

    /* ---------- Category list is built from the data ---------- */

    function fillCategories() {
        const names = [];
        events.forEach(function (event) {
            if (names.indexOf(event.category) === -1) { names.push(event.category); }
        });
        names.sort();

        names.forEach(function (name) {
            const option = el("option", "", name);
            option.value = name;
            category.appendChild(option);
        });
    }

    /* ---------- Events ---------- */

    searchBox.addEventListener("input", render);
    category.addEventListener("change", render);
    sortBy.addEventListener("change", render);
    showPast.addEventListener("change", render);

    clearBtn.addEventListener("click", function () {
        searchBox.value = "";
        category.value = "all";
        sortBy.value = "soonest";
        showPast.checked = false;
        render();
        searchBox.focus();
    });

    /* ---------- Load the data ---------- */

    list.appendChild(el("p", "event-empty", "Loading events..."));

    fetch(DATA_URL)
        .then(function (response) {
            if (!response.ok) { throw new Error("HTTP " + response.status); }
            return response.json();
        })
        .then(function (data) {
            events = data;
            fillCategories();
            render();
        })
        .catch(function () {
            list.replaceChildren(el(
                "p",
                "event-empty",
                "We could not load the events right now. Please refresh the page or contact us for the latest event dates."
            ));
            count.textContent = "Events could not be loaded";
        });

})();