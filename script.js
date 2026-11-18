/* =================================
   YAXO-SYSTEMS
   MAIN JAVASCRIPT
================================= */
// 1. MOBILE NAVIGATION
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});
// CLOSE MENU AFTER CLICKING A LINK
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});
// 2. AUTOMATIC COPYRIGHT YEAR
document.getElementById("year").textContent =
    new Date().getFullYear();
// 3. CONTACT FORM
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    // CHECK REQUIRED INFORMATION
    if (!name || !email || !subject || !message) {
        alert("Please complete all fields.");
        return;
    }
    // EMAIL DETAILS
    const recipient = "yayamohammed292@gmail.com";
    const emailBody =
        `Name: ${name}\n` +
        `Email: ${email}\n\n` +
        `Message: ${message}`;
    // OPEN EMAIL APPLICATION
    const mailtoLink =
        `mailto:${recipient}` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
});
// 4. SMOOTH NAVIGATION
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {
        const target = document.querySelector(
            this.getAttribute("href")
        );
        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
// 5. CONSOLE MESSAGE
console.log("Yaxo-Systems website loaded successfully.");
console.log("Technology. Innovation. Digital Solutions.");
