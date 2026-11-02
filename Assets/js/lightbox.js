(function () {

    "use strict";

    // Every gallery image
    const images = Array.from(document.querySelectorAll(
        ".gallery-feature-image img, .gallery-image img"
    ));

    if (images.length === 0) { return; }

    let current = 0;
    let lastFocused = null;
    let touchStartX = 0;

    /* ---------- Small DOM helper ---------- */

    function el(tag, className, text) {
        const node = document.createElement(tag);
        if (className) { node.className = className; }
        if (text !== undefined) { node.textContent = text; }
        return node;
    }

    function makeButton(className, label, symbol) {
        const button = el("button", "lightbox-btn " + className, symbol);
        button.type = "button";
        button.setAttribute("aria-label", label);
        return button;
    }

    /* ---------- Build the lightbox ---------- */

    const overlay = el("div", "lightbox");
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Image viewer");
    overlay.hidden = true;

    const closeBtn = makeButton("lightbox-close", "Close image viewer", "\u00d7");
    const prevBtn  = makeButton("lightbox-prev", "Previous image", "\u2039");
    const nextBtn  = makeButton("lightbox-next", "Next image", "\u203a");
    const counter  = el("p", "lightbox-counter");
    counter.setAttribute("aria-live", "polite");

    const figure  = el("figure", "lightbox-figure");
    const bigImg  = el("img", "lightbox-image");
    const caption = el("figcaption", "lightbox-caption");
    figure.appendChild(bigImg);
    figure.appendChild(caption);

    overlay.appendChild(closeBtn);
    overlay.appendChild(counter);
    overlay.appendChild(prevBtn);
    overlay.appendChild(figure);
    overlay.appendChild(nextBtn);
    document.body.appendChild(overlay);

    /* ---------- Show one image ---------- */
    
    function captionFor(img) {
        const card = img.closest(".gallery-card");
        const heading = card ? card.querySelector("h3") : null;
        return heading ? heading.textContent + ": " + img.alt : img.alt;
    }

    function show(index) {
        current = (index + images.length) % images.length;
        const img = images[current];

        bigImg.src = img.currentSrc || img.src;
        bigImg.alt = img.alt;
        caption.textContent = captionFor(img);
        counter.textContent = (current + 1) + " / " + images.length;
    }

    /* ---------- Open and close ---------- */

    function open(index) {
        lastFocused = document.activeElement;
        show(index);
        overlay.hidden = false;
        document.body.classList.add("lightbox-open");
        closeBtn.focus();
    }

    function close() {
        overlay.hidden = true;
        document.body.classList.remove("lightbox-open");
        if (lastFocused) { lastFocused.focus(); }
    }

    /* ---------- Make each image clickable and keyboard friendly ---------- */

    images.forEach(function (img, index) {
        img.classList.add("gallery-zoomable");
        img.tabIndex = 0;
        img.setAttribute("role", "button");
        img.setAttribute("aria-label", "View larger image: " + img.alt);

        img.addEventListener("click", function () { open(index); });

        img.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                open(index);
            }
        });
    });

    /* ---------- Controls ---------- */

    closeBtn.addEventListener("click", close);
    prevBtn.addEventListener("click", function () { show(current - 1); });
    nextBtn.addEventListener("click", function () { show(current + 1); });

    // Click on the dark background (not the image) to close
    overlay.addEventListener("click", function (event) {
        if (event.target === overlay) { close(); }
    });

    document.addEventListener("keydown", function (event) {
        if (overlay.hidden) { return; }

        if (event.key === "Escape")     { close(); }
        if (event.key === "ArrowLeft")  { show(current - 1); }
        if (event.key === "ArrowRight") { show(current + 1); }

        // Keep Tab inside the lightbox while it is open
        if (event.key === "Tab") {
            const buttons = [closeBtn, prevBtn, nextBtn];
            const first = buttons[0];
            const last = buttons[buttons.length - 1];

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        }
    });

    // Swipe left / right on touch screens
    overlay.addEventListener("touchstart", function (event) {
        touchStartX = event.changedTouches[0].clientX;
    }, { passive: true });

    overlay.addEventListener("touchend", function (event) {
        const distance = event.changedTouches[0].clientX - touchStartX;
        if (Math.abs(distance) > 50) {
            show(distance < 0 ? current + 1 : current - 1);
        }
    }, { passive: true });

})();