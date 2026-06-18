document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("themeToggle");
    
    if (themeToggle) {
        themeToggle.addEventListener("click", function() {
            const body = document.body;
            if (body.style.backgroundColor === "rgb(26, 26, 26)") {
                body.style.backgroundColor = "#0b0b0b";
                themeToggle.textContent = "Toggle Dim Mode";
            } else {
                body.style.backgroundColor = "rgb(26, 26, 26)";
                themeToggle.textContent = "Toggle Deep Black";
            }
        });
    }
    const contactForm = document.getElementById("coffeeContactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const feedbackElement = document.getElementById("formFeedback");

            if (name === "" || email === "") {
                feedbackElement.className = "alert alert-danger mt-3";
                feedbackElement.textContent = "Please fill out your name and email address.";
            } else {
                feedbackElement.className = "alert alert-success mt-3";
                feedbackElement.textContent = `Thank you, ${name}! Your message has been sent to our baristas successfully.`;
                contactForm.reset();
            }
        });
    }
});