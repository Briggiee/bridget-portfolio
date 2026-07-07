const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.innerHTML = "✕";
    } else {
        menuToggle.innerHTML = "☰";
    }
});

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.textContent = "☀️";
    }

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙";
        }
    });
}

/* CONTACT FORM */
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
    contactForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const formData = new FormData(contactForm);

        try {
            const response = await fetch(contactForm.action, {
                method: contactForm.method,
                body: formData,
                headers: {
                    Accept: "application/json"
                }
            });

            if (response.ok) {
                formStatus.textContent = "Thank you! Your message has been sent successfully.";
                formStatus.className = "form-status success";
                contactForm.reset();
            } else {
                formStatus.textContent = "Oops! Something went wrong. Please try again.";
                formStatus.className = "form-status error";
            }
        } catch (error) {
            formStatus.textContent = "Network error. Please check your connection and try again.";
            formStatus.className = "form-status error";
        }
    });
}
