document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", function() {
             const body = document.body;
             if (body.style.backgroundColor === "rgb(26, 26, 26)") {
                    body.style.backgroundColor = "#0b0b0b";
                    themeToggle.textContent = "Toggle Dim Mode";
                } else {
                    body.style.backgroundColor = "1a1a1a";
                    themeToggle.textContent = "Toggle Deep Black";
                }
        });
    }
    cons