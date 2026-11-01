const signatureStar = document.querySelector(".signature-star");
const signatureTrack = document.querySelector(".beauty-signature");
const signatureMessage = document.querySelector(".signature-message");

let targetPosition = 0;
let currentPosition = 0;

function updateSignaturePosition() {
    const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const scrollProgress =
        window.scrollY / scrollableHeight;

    targetPosition =
        scrollProgress *
        (signatureTrack.offsetHeight - signatureStar.offsetHeight);
}

function createSparkle() {
    const sparkle = document.createElement("span");

    sparkle.classList.add("signature-sparkle");
    sparkle.textContent = "✦";

    const starRect = signatureStar.getBoundingClientRect();

    sparkle.style.left = `${starRect.left + 5}px`;
    sparkle.style.top = `${starRect.top + 10}px`;

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 700);
}


window.addEventListener("scroll", updateSignaturePosition);
window.addEventListener("scroll", createSparkle);
window.addEventListener("resize", updateSignaturePosition);

updateSignaturePosition();
function animateSignature() {
    currentPosition += (targetPosition - currentPosition) * 0.08;

    signatureStar.style.top = `${currentPosition}px`;

    const scrollProgress =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);

    if (scrollProgress > 0.95) {
        signatureStar.textContent = "❀";
        signatureStar.classList.add("signature-finish");
        signatureMessage.classList.add("visible");
    } else {
        signatureStar.textContent = "✦";
        signatureStar.classList.remove("signature-finish");
        signatureMessage.classList.remove("visible");
    }

    requestAnimationFrame(animateSignature);
}

animateSignature();

const revealElements = document.querySelectorAll(
    ".service-card, .review-card, .gallery-grid img"
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach((element) => {
    revealObserver.observe(element);
});

const floatingBooking = document.querySelector(".floating-booking");

window.addEventListener("scroll", function() {
    if (window.innerWidth <= 600 && window.scrollY > 500) {
        floatingBooking.classList.add("show-mobile");
    } else {
        floatingBooking.classList.remove("show-mobile");
    }
});

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("scroll", function() {
    if (window.innerWidth > 768) {
        const movement = window.scrollY * 0.12;

        heroImage.style.transform = translateY(`${movement}px`);
    } else {
        heroImage.style.transform = "translateY(0)";
    }
});

const comparison = document.querySelector(".comparison");
const comparisonSlider = document.querySelector(".comparison-slider");
const comparisonBefore = document.querySelector(".comparison-before");
const comparisonLine = comparison.querySelector("::after");

comparisonSlider.addEventListener("input", function () {
    const value = comparisonSlider.value;

    comparisonBefore.style.width = `${value}%`;
    comparison.style.setProperty("--position", `${value}%`);
});

const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector("#mobile-nav");
const mobileNavLinks = mobileNav.querySelectorAll("a");

menuToggle.addEventListener("click", function () {
    const isOpen = mobileNav.classList.toggle("open");

    menuToggle.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Uždaryti meniu" : "Atidaryti meniu"
    );
});

mobileNavLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        mobileNav.classList.remove("open");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Atidaryti meniu");
    });
});

const translations = {
    lt: {
        navAbout: "Apie mus",
        navServices: "Paslaugos",
        navGallery: "Galerija",
        navContacts: "Kontaktai",

        heroLabel: "GROŽIS. ELEGANCIJA. PASITIKĖJIMAS.",
        heroTitle: "Jūsų grožis – mūsų aistra",
        heroDescription: "Atraskite profesionalias grožio paslaugas jaukioje ir elegantiškoje aplinkoje.",
        heroButton: "Registruotis",
        servicesTitle: "Mūsų paslaugos",
servicesIntro: "Pasirinkite jums tinkamiausią grožio procedūrą.",
serviceFace: "Veido procedūros",
serviceFaceDesc: "Odos priežiūra ir atgaivinimas.",
serviceMakeup: "Makiažas",
serviceMakeupDesc: "Profesionalus makiažas jūsų progai.",
serviceNails: "Manikiūras",
serviceNailsDesc: "Rankų ir nagų grožio priežiūra.",
reviewsTitle: "Klientų atsiliepimai",
reviewsIntro: "Mūsų klientų pasitikėjimas – didžiausias įvertinimas.",
review1: "Nuostabi atmosfera ir labai profesionalus aptarnavimas. Tikrai sugrįšiu!",
review2: "Esu labai patenkinta rezultatu. Viskas atlikta kruopščiai ir su meile.",
review3: "Jauki aplinka, malonus personalas ir puikios grožio procedūros.",
galleryTitle: "Mūsų darbai",
galleryIntro: "Grožio detalės, kurios įkvepia pasitikėti savimi.",
beforeAfterTitle: "Prieš ir po",

    beforeAfterIntro: "Atraskite grožio pokyčius.",

    beforeLabel: "PRIEŠ",

    afterLabel: "PO",

    contactsTitle: "Susisiekite su mumis",

    contactsIntro: "Užsiregistruokite vizitui ir susisieksime su jumis.",

    namePlaceholder: "Jūsų vardas",

    emailPlaceholder: "Jūsų el. paštas",

    servicePlaceholder: "Pasirinkite paslaugą",

    messagePlaceholder: "Jūsų žinutė",

    submitButton: "Registruotis",

    studioContactsTitle: "Susisiekite su mumis",

    city: "Vilnius, Lietuva",

    instagram: "Instagram",

    facebook: "Facebook",

    bookingButton: "Registruotis",

    footerText: "Visos teisės saugomos.",
    namePlaceholder: "Jūsų vardas",
messagePlaceholder: "Jūsų žinutė",
signatureMessage: "Ačiū, kad esate su mumis",
    },

    en: {
        navAbout: "About us",
        navServices: "Services",
        navGallery: "Gallery",
        navContacts: "Contact",

        heroLabel: "BEAUTY. ELEGANCE. CONFIDENCE.",
        heroTitle: "Your beauty is our passion",
        heroDescription: "Discover professional beauty services in a cozy and elegant atmosphere.",
        heroButton: "Book an appointment",
        servicesTitle: "Our services",
servicesIntro: "Choose the beauty treatment that suits you best.",
serviceFace: "Facial treatments",
serviceFaceDesc: "Skincare and skin rejuvenation.",
serviceMakeup: "Makeup",
serviceMakeupDesc: "Professional makeup for your special occasion.",
serviceNails: "Manicure",
serviceNailsDesc: "Hand and nail care.",
reviewsTitle: "Client testimonials",
reviewsIntro: "Our clients' trust is our greatest reward.",
review1: "Amazing atmosphere and very professional service. I will definitely come back!",
review2: "I am very happy with the result. Everything was done with care and attention.",
review3: "A cozy atmosphere, friendly staff and excellent beauty treatments.",
galleryTitle: "Our work",
galleryIntro: "Beauty details that inspire confidence.",
beforeAfterTitle: "Before & After",

    beforeAfterIntro: "Discover the beauty transformation.",

    beforeLabel: "BEFORE",

    afterLabel: "AFTER",

    contactsTitle: "Contact us",

    contactsIntro: "Book your appointment and we’ll get in touch with you.",

    namePlaceholder: "Your name",

    emailPlaceholder: "Your email",

    servicePlaceholder: "Select a service",

    messagePlaceholder: "Your message",

    submitButton: "Book an appointment",

    studioContactsTitle: "Get in touch",

    city: "Vilnius, Lithuania",

    instagram: "Instagram",

    facebook: "Facebook",

    bookingButton: "Book now",

    footerText: "All rights reserved.",
    bookingButton: "Book now",
    namePlaceholder: "Your name",
messagePlaceholder: "Your message",
signatureMessage: "Thank you for being with us",
    }
};

function changeLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;
        element.textContent = translations[lang][key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
        const key = element.dataset.i18nPlaceholder;
        element.placeholder = translations[lang][key];
    });


    document.documentElement.lang = lang;

    document.querySelectorAll(".lang-btn").forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.lang === lang
        );
    });

    localStorage.setItem("selectedLanguage", lang);
}

document.querySelectorAll(".lang-btn").forEach(button => {
    button.addEventListener("click", () => {
        changeLanguage(button.dataset.lang);
    });
});

const savedLanguage = localStorage.getItem("selectedLanguage") || "lt";
changeLanguage(savedLanguage);