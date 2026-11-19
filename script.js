/* ========================================
   YAXO-SYSTEMS
   Main JavaScript
======================================== */


/* ---------- MOBILE NAVIGATION ---------- */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {

        mainNav.classList.toggle("active");

        const isOpen = mainNav.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.innerHTML = isOpen
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';

    });


    // Close menu when a navigation link is selected

    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mainNav.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';

        });

    });

}


/* ---------- AUTOMATIC COPYRIGHT YEAR ---------- */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* ---------- CONTACT FORM ---------- */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim();

        const service = document.getElementById("service").value;

        const message = document.getElementById("message").value.trim();


        // Check required fields

        if (!name || !email || !service || !message) {

            alert("Please complete all fields before sending.");

            return;

        }


        // Prepare WhatsApp message

        const whatsappMessage =
            "Hello Yaxo-Systems,\n\n" +
            "My name is: " + name + "\n" +
            "Email: " + email + "\n" +
            "Service: " + service + "\n\n" +
            "Message:\n" + message;


        // WhatsApp business number

        const whatsappNumber = "233542408676";


        // Generate WhatsApp link

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(whatsappMessage);


        // Open WhatsApp

        window.open(whatsappURL, "_blank", "noopener,noreferrer");

    });

}


/* ---------- ACTIVE NAVIGATION ---------- */

const sections = document.querySelectorAll("main section[id]");

const navigationLinks = document.querySelectorAll(".nav-link");

if (sections.length && navigationLinks.length) {

    const sectionObserver = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    navigationLinks.forEach(function (link) {

                        link.classList.remove("active");

                        if (
                            link.getAttribute("href") ===
                            "#" + entry.target.id
                        ) {

                            link.classList.add("active");

                        }

                    });

                }

            });

        },

        {
            rootMargin: "-30% 0px -60% 0px"
        }

    );


    sections.forEach(function (section) {

        sectionObserver.observe(section);

    });

}


/* ---------- RESET MOBILE MENU ON RESIZE ---------- */

window.addEventListener("resize", function () {

    if (window.innerWidth > 768 && mainNav && menuToggle) {

        mainNav.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';

    }

});


/* ---------- WEBSITE READY ---------- */

console.log("Yaxo-Systems website loaded successfully.");
