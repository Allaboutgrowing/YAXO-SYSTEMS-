/* =================================
   YAXO-SYSTEMS
   WEBSITE JAVASCRIPT
================================= */


// MOBILE NAVIGATION

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.innerHTML = isOpen ? "&times;" : "&#9776;";

    });


    // CLOSE MENU AFTER CLICKING A LINK

    document.querySelectorAll(".nav-links a").forEach(function(link) {

        link.addEventListener("click", function() {

            navLinks.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.innerHTML = "&#9776;";

        });

    });

}


// AUTOMATIC COPYRIGHT YEAR

const currentYear = document.getElementById("current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// SCROLL REVEAL ANIMATIONS

const revealElements = document.querySelectorAll(
    ".service-card, .solution-card, .project-card, .identity-card, .why-item, .contact-item"
);

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.12
    });

    revealElements.forEach(function(element) {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });

}
