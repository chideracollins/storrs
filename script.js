document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const ctaForm = document.querySelector(".cta-form");
  const successMessage = document.querySelector(".form-success");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    navLinks.addEventListener("click", (event) => {
      if (event.target.tagName.toLowerCase() === "a") {
        navLinks.classList.remove("open");
      }
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      const target = targetId && document.querySelector(targetId);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  if (ctaForm && successMessage) {
    ctaForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const email = ctaForm.querySelector("input[name='email']");
      const whatsapp = ctaForm.querySelector("input[name='whatsapp']");

      if (!email.value.trim() || !whatsapp.value.trim()) {
        successMessage.textContent = "Please add at least your email and WhatsApp number.";
        successMessage.style.color = "#fca5a5";
        successMessage.hidden = false;
        return;
      }

      successMessage.textContent =
        "Thank you! We\'ll be in touch shortly with your WhatsApp growth plan.";
      successMessage.style.color = "#bbf7d0";
      successMessage.hidden = false;

      ctaForm.reset();
    });
  }
});

