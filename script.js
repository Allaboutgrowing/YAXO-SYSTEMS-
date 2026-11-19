/* =========================================
YAXO-SYSTEMS
Website JavaScript
========================================= */

/* 1. MOBILE NAVIGATION */

const menuToggle = document.getElementById(“menuToggle”);
const mainNav = document.getElementById(“mainNav”);

if (menuToggle && mainNav) {

menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.innerHTML = isOpen
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
});
// Close menu after clicking a navigation link
const navLinks = mainNav.querySelectorAll("a");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        mainNav.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

}

/* 2. AUTOMATIC COPYRIGHT YEAR */

const currentYear = document.getElementById(“currentYear”);

if (currentYear) {
currentYear.textContent = new Date().getFullYear();
}

/* 3. WHATSAPP CONTACT FORM */

const contactForm = document.getElementById(“contactForm”);

if (contactForm) {

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    // Collect form information
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();
    // Check required information
    if (!name || !email || !service || !message) {
        alert("Please complete all the required fields.");
        return;
    }
    // Prepare WhatsApp message
    const whatsappMessage =
        "Hello Yaxo-Systems,%0A%0A" +
        "*New Website Enquiry*%0A%0A" +
        "*Name:* " + encodeURIComponent(name) + "%0A" +
        "*Email:* " + encodeURIComponent(email) + "%0A" +
        "*Service:* " + encodeURIComponent(service) + "%0A%0A" +
        "*Message:*%0A" + encodeURIComponent(message);
    // Yaxo-Systems WhatsApp number
    const whatsappNumber = "233542408676";
    // Open WhatsApp with prepared message
    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        whatsappMessage;
    window.open(whatsappURL, "_blank", "noopener,noreferrer");
});

}

/* 4. ACTIVE NAVIGATION LINK */

const sections = document.querySelectorAll(“main section[id]”);

const navigationLinks = document.querySelectorAll(”.nav-link”);

if (“IntersectionObserver” in window) {

const sectionObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navigationLinks.forEach(link => {
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
        rootMargin: "-35% 0px -55% 0px"
    }
);
sections.forEach(section => {
    sectionObserver.observe(section);
});

}

/* 5. CLOSE MOBILE MENU WHEN RESIZED */

window.addEventListener(“resize”, () => {

if (window.innerWidth > 760 && mainNav && menuToggle) {
    mainNav.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
}

});

/* 6. CONSOLE MESSAGE */

console.log(
“Yaxo-Systems website successfully loaded.”
);
