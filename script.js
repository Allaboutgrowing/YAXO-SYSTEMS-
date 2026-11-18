/* =====================================
   YAXO-SYSTEMS
   MAIN JAVASCRIPT
===================================== */
// 1. MOBILE NAVIGATION
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    const isOpen = navLinks.classList.contains("active");
    menuBtn.setAttribute("aria-expanded", isOpen);
    menuBtn.textContent = isOpen ? "✕" : "☰";
});
// 2. CLOSE MENU AFTER CLICKING A LINK
document.querySelectorAll(".navigation a").forEach(link => {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.textContent = "☰";
    });
});
// 3. AUTOMATIC COPYRIGHT YEAR
const yearElement = document.getElementById("year");
yearElement.textContent = new Date().getFullYear();
// 4. CONTACT FORM
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // GET FORM INFORMATION
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    // VALIDATE INFORMATION
    if (!name || !email || !subject || !message) {
        alert("Please complete all fields.");
        return;
    }
    // EMAIL ADDRESS
    const recipient = "yayamohammed292@gmail.com";
    // PREPARE EMAIL CONTENT
    const emailBody =
        `Name: ${name}\n` +
        `Email: ${email}\n\n` +
        `Message:\n${message}`;
    // CREATE EMAIL LINK
    const mailtoLink =
        `mailto:${recipient}` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(emailBody)}`;
    // OPEN EMAIL APPLICATION
    window.location.href = mailtoLink;
});
// 5. WEBSITE LOADED MESSAGE
console.log("--------------------------------");
console.log("YAXO-SYSTEMS");
console.log("Technology. Innovation. Digital Solutions.");
console.log("Website loaded successfully.");
console.log("--------------------------------");
