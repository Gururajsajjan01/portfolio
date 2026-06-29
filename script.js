// ===============================
// Typing Animation
// ===============================

const text = [
    "Python Developer",
    "AI Learner",
    "Web Developer",
    "BCA Student",
    "Future AI Engineer"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.querySelector(".typing");

function typeEffect() {

    if (!typing) return;

    let current = text[textIndex];

    if (!deleting) {
        typing.textContent = current.substring(0, charIndex++);
    } else {
        typing.textContent = current.substring(0, charIndex--);
    }

    let speed = deleting ? 50 : 120;

    if (!deleting && charIndex === current.length + 1) {
        deleting = true;
        speed = 1500;
    }

    if (deleting && charIndex === 0) {
        deleting = false;
        textIndex = (textIndex + 1) % text.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ===============================
// Scroll Reveal Animation
// ===============================

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    const windowHeight = window.innerHeight;

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < windowHeight - 100) {
            section.classList.add("active");
        }
    });

}

window.addEventListener("scroll", revealSections);
revealSections();


// ===============================
// Back To Top Button
// ===============================

const button = document.createElement("button");

button.innerHTML = "⬆";

button.id = "topBtn";

document.body.appendChild(button);

button.style.position = "fixed";
button.style.bottom = "20px";
button.style.right = "20px";
button.style.width = "50px";
button.style.height = "50px";
button.style.border = "none";
button.style.borderRadius = "50%";
button.style.background = "#38bdf8";
button.style.color = "#000";
button.style.fontSize = "22px";
button.style.cursor = "pointer";
button.style.display = "none";
button.style.boxShadow = "0 0 15px #38bdf8";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }

});

button.onclick = () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

};


// ===============================
// Navbar Active Link
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(sec => {

        const top = sec.offsetTop - 100;

        if (pageYOffset >= top) {
            current = sec.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});