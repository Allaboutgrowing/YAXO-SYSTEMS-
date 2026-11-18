// YAXO-SYSTEMS WEBSITE INTERACTIONS

document.addEventListener("DOMContentLoaded", function () {

    // MOBILE NAVIGATION
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");

            menuToggle.textContent =
                navLinks.classList.contains("active") ? "✕" : "☰";
        });

        // Close menu after clicking a navigation link
        navLinks.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
                menuToggle.textContent = "☰";
            });

        });
    }

    // CURRENT YEAR IN FOOTER
    const footer = document.querySelector("footer p");

    if (footer) {
        footer.textContent =
            "© " + new Date().getFullYear() +
            " Yaxo-Systems. All Rights Reserved.";
    }

    // SCROLL REVEAL ANIMATION
    const revealElements = document.querySelectorAll(
        ".service-card, .project-card, .solution-card, .section-title"
    );

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.15
    });

    revealElements.forEach(function (element) {
        element.classList.add("reveal");
        observer.observe(element);
    });

});
