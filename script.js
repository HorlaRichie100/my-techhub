// Button alert
const heroBtn = document.getElementById("heroBtn");
if (heroBtn) {
    heroBtn.addEventListener("click", () => {
        alert("Welcome! Let's build something amazing 🚀");
    });
}

// Scroll Animation
const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));

// Dark mode toggle
const darkBtn = document.getElementById("darkModeBtn");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Save user preference
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
// Scroll-to-top button
const scrollBtn = document.getElementById("scrollTopBtn");

// Show button when scrolling 300px down
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

// Smooth scroll to top when clicked
scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// Typewriter Effect
const textArray = [
    "We Build Websites That Stand Out.",
    "Your Vision, Our Creation.",
    "Professional Web Development Services.",
    "Let's Create Something Amazing Together."
];

let textIndex = 0;
let charIndex = 0;
const speed = 100;
const animatedText = document.getElementById("animatedText");

function typeEffect() {
    if (charIndex < textArray[textIndex].length) {
        animatedText.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, speed);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        animatedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeEffect, 300);
    }
}

typeEffect();
