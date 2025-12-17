// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu toggle
const burger = document.querySelector(".burger");
const mobileMenu = document.getElementById("mobileMenu");

if (burger && mobileMenu) {
  burger.addEventListener("click", () => {
    const isOpen = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", String(!isOpen));
    mobileMenu.hidden = isOpen;
  });

  // Close menu when clicking a link
  mobileMenu.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.matches("a")) {
      burger.setAttribute("aria-expanded", "false");
      mobileMenu.hidden = true;
    }
  });
}

// FAQ accordion
const faq = document.querySelector("[data-faq]");
if (faq) {
  faq.addEventListener("click", (e) => {
    const btn = e.target.closest(".faq__item");
    if (!btn) return;

    const expanded = btn.getAttribute("aria-expanded") === "true";

    // close others (optional)
    [...faq.querySelectorAll(".faq__item")].forEach((item) => {
      item.setAttribute("aria-expanded", "false");
    });

    btn.setAttribute("aria-expanded", String(!expanded));
  });
}

// Fake contact submit (front-end only)
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

if (form && note) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    note.textContent = "Thanks! Your message is ready to be sent. Next step: connect this form to email (Formspree) or a backend.";
    form.reset();
  });
}
