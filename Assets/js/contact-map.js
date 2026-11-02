(function () {

    "use strict";

    const mapElement = document.getElementById("nexusMap");
    if (!mapElement) { return; }

    // If the Leaflet library did not load (offline), explain instead of showing a blank box
    if (typeof L === "undefined") {
        mapElement.textContent = "The map could not be loaded. Please check your internet connection and refresh the page.";
        mapElement.classList.add("map-failed");
        return;
    }

    /* ---------- The locations (edit these to change the map) ---------- */

    const LOCATIONS = [
        {
            name: "NEON NEXUS Main Hub",
            address: "123 Main Street, Gqeberha, Eastern Cape",
            description: "Gaming at The Grid, Music HQ, the Canvas District and the NEXUS Caf\u00e9.",
            lat: -33.9608,
            lng: 25.6022
        },
        {
            name: "NEXUS Arena",
            address: "Walmer, Gqeberha, Eastern Cape",
            description: "Our events venue for tournaments, open mic nights and live music showcases.",
            lat: -33.9815,
            lng: 25.5890
        }
    ];

    /* ---------- Create the map ---------- */

    const map = L.map(mapElement, { scrollWheelZoom: false });

    L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}", {
    maxZoom: 19,
    attribution: "Tiles &copy; Esri &mdash; Esri, HERE, Garmin, OpenStreetMap contributors"
    }).addTo(map);

    // Scrolling the page should not zoom the map by accident:
    // the wheel only zooms once the visitor has clicked the map
    map.on("click", function () { map.scrollWheelZoom.enable(); });
    map.on("mouseout", function () { map.scrollWheelZoom.disable(); });

    /* ---------- Small DOM helper ---------- */

    function el(tag, className, text) {
        const node = document.createElement(tag);
        if (className) { node.className = className; }
        if (text !== undefined) { node.textContent = text; }
        return node;
    }

    /* ---------- Popup content for a location ---------- */

    function buildPopup(place) {
        const box = el("div", "map-popup");
        box.appendChild(el("h3", "", place.name));
        box.appendChild(el("p", "", place.address));
        box.appendChild(el("p", "", place.description));

        const link = el("a", "", "Get directions");
        link.href = "https://www.google.com/maps/dir/?api=1&destination=" + place.lat + "," + place.lng;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        box.appendChild(link);

        return box;
    }

    /* ---------- Markers and the location list ---------- */

    const listElement = document.getElementById("mapLocations");
    const bounds = [];
    const markers = [];

    LOCATIONS.forEach(function (place, index) {

        const marker = L.marker([place.lat, place.lng], { title: place.name, alt: place.name })
            .addTo(map)
            .bindPopup(buildPopup(place));

        markers.push(marker);
        bounds.push([place.lat, place.lng]);

        // One button per location in the list beside the map
        const item = el("li");
        const button = el("button", "map-location-btn");
        button.type = "button";
        button.appendChild(el("span", "map-location-name", place.name));
        button.appendChild(el("span", "map-location-address", place.address));

        button.addEventListener("click", function () {
            map.flyTo([place.lat, place.lng], 16, { duration: 1.2 });
            marker.openPopup();
        });

        item.appendChild(button);
        listElement.appendChild(item);
    });

    /* ---------- Show every location ---------- */

    function showAll() {
        map.closePopup();
        map.fitBounds(bounds, { padding: [60, 60], maxZoom: 15 });
    }

    document.getElementById("mapShowAll").addEventListener("click", showAll);

    showAll();

})();