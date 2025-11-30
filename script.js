script.js
// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Mobile menu toggle (optional if you add a hamburger menu later)
const nav = document.querySelector("nav");
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "☰";
toggleBtn.classList.add("menu-toggle");
nav.prepend(toggleBtn);

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Contact form handler
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.querySelector("input[type='text']").value;
  const email = form.querySelector("input[type='email']").value;
  const message = form.querySelector("textarea").value;

  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been received. We'll reply to ${email} soon.`);
    form.reset();
  } else {
    alert("Please fill out all fields before submitting.");
  }
});

// Optional: Add a simple fade-in animation when sections come into view
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});