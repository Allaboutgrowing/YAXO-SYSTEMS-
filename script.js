// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");


menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.innerHTML = isOpen
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';

    menuToggle.setAttribute("aria-expanded", isOpen);

});


// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// AUTOMATIC COPYRIGHT YEAR

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();


// CONTACT FORM

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const service = document.getElementById("service").value;

    const message = document.getElementById("message").value.trim();


    if (!name || !email || !service || !message) {

        alert("Please complete all fields before sending.");

        return;

    }


    const whatsappMessage =

        "Hello Yaxo-Systems!" +

        "\n\nMy Name: " + name +

        "\nEmail: " + email +

        "\nService: " + service +

        "\n\nProject Details: " + message;


    const whatsappURL =

        "https://wa.me/233542408676?text=" +

        encodeURIComponent(whatsappMessage);


    window.open(whatsappURL, "_blank");

});


// SCROLL ANIMATION

const observerOptions = {

    threshold: 0.15

};


const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, observerOptions);


document.querySelectorAll(
    ".service-card, .solution-card, .why-card, .process-item"
).forEach(function(element) {

    observer.observe(element);

});


// HEADER SCROLL EFFECT

window.addEventListener("scroll", function() {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)";

    } else {

        header.style.boxShadow = "none";

    }

});


// CONSOLE MESSAGE

console.log("Yaxo-Systems website successfully loaded.");

console.log("Technology That Moves Business Forward.");
