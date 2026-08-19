// =====================================
// DONKELLY SWIFT DELIVERY
// Main Website JavaScript
// =====================================


// ================================
// MOBILE MENU
// ================================

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {

    menuBtn.addEventListener("click", () => {

        mobileMenu.classList.toggle("open");

        const icon = menuBtn.querySelector("i");

        if (mobileMenu.classList.contains("open")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });


    // Close menu when a link is clicked
    mobileMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("open");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}


// ================================
// HEADER SHADOW ON SCROLL
// ================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        navbar.style.boxShadow =
            "0 5px 20px rgba(0, 0, 0, 0.08)";

    } else {

        navbar.style.boxShadow = "none";

    }

});


// ================================
// SCROLL ANIMATION
// ================================

const animatedElements = document.querySelectorAll(
    ".feature-card, .gift-card, .step, .why-card"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.12
    }
);


animatedElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity .6s ease, transform .6s ease";

    observer.observe(element);

});


// ================================
// ACTIVE NAVIGATION
// ================================

const navLinks = document.querySelectorAll(
    ".desktop-nav a"
);

window.addEventListener("scroll", () => {

    const sections = document.querySelectorAll("section[id]");

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === `#${currentSection}`) {
            link.classList.add("active");
        }

        if (
            currentSection === "" &&
            href === "index.html"
        ) {
            link.classList.add("active");
        }

    });

});


// ================================
// CURRENT YEAR
// ================================

const yearElements = document.querySelectorAll(
    "[data-current-year]"
);

yearElements.forEach(element => {
    element.textContent = new Date().getFullYear();
});


// ================================
// CONSOLE
// ================================

console.log(
    "Donkelly Swift Delivery website loaded successfully."
);
