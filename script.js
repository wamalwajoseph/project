const modeBtn = document.getElementById('themeToggle');
const pageBody = document.body;
modeBtn.addEventListener('click', function() {
    pageBody.classList.toggle('dim-mode');
    if (pageBody.classList.contains('dim-mode')) {
        modeBtn.textContent = 'Toggle Deep Dark Mode';
        pageBody.style.backgroundColor = '#1c1a17';
    } else {
        modeBtn.textContent = 'Toggle Dim Mode';
        pageBody.style.backgroundColor = '#0b0b0b';
    }
});
const contactForm = document.getElementById('coffeeContactForm');
const statusDiv = document.getElementById('formFeedback');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const clientName = document.getElementById('name').value.trim();
        const clientEmail = document.getElementById('email').value.trim();
        const clientMsg = document.getElementById('message').value.trim();
        if (!clientName || !clientEmail || !clientMsg) {
            statusDiv.innerHTML = `<div class="alert alert-danger py-2">Please fill out all fields before submitting.</div>`;
            return;
        }
        if (clientEmail.indexOf('@') === -1) {
            statusDiv.innerHTML = `<div class="alert alert-danger py-2">Please enter a valid email address.</div>`;
            return;
        statusDiv.innerHTML = `<div class="alert alert-success py-2">Thank you! Your message has been sent successfully.</div>`;
        contactForm.reset();
    });
}