// Navigation smooth scroll
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    let section = document.querySelector(this.getAttribute("href"));
    section.scrollIntoView({ behavior: "smooth" });
  });
});

// Mobile menu toggle
let nav = document.querySelector("nav");
let menuButton = document.createElement("button");
menuButton.textContent = "☰";
menuButton.className = "menu-toggle";
nav.prepend(menuButton);

menuButton.addEventListener("click", function() {
  nav.classList.toggle("open");
});

// Contact form simple handler
let form = document.querySelector("form");
form.addEventListener("submit", function(e) {
  e.preventDefault();
  let name = form.querySelector("input[type='text']").value;
  let email = form.querySelector("input[type='email']").value;
  let message = form.querySelector("textarea").value;

  if (name && email && message) {
    alert("Thanks " + name + "! I'll reply to " + email + " soon.");
    form.reset();
  } else {
    alert("Please fill in all fields.");
  }
});

// Fade-in sections when scrolling
let sections = document.querySelectorAll("section");
let observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

sections.forEach(function(section) {
  section.classList.add("hidden");
  observer.observe(section);
});

// Chatbot logic (simple FAQ style)
let faqs = [
  { q: /skills/i, a: "I know HTML, CSS, and JavaScript." },
  { q: /projects/i, a: "I made a portfolio site and some practice projects." },
  { q: /resume/i, a: "You can download my resume from the Resume section." },
  { q: /music/i, a: "I also play drums and started a record label in Nigeria." },
  { q: /apple/i, a: "I work at Apple and want to learn more about network security." },
  { q: /contact/i, a: "Use the contact form to send me a message." }
];

let chatToggle = document.getElementById("chat-toggle");
let chatPanel = document.getElementById("chat-panel");
let chatLog = document.getElementById("chat-log");
let chatInput = document.getElementById("chat-input");
let chatSend = document.getElementById("chat-send");

chatToggle.addEventListener("click", function() {
  chatPanel.classList.toggle("hidden");
});

chatSend.addEventListener("click", function() {
  let msg = chatInput.value.trim();
  if (!msg) return;

  chatLog.innerHTML += "<p><strong>You:</strong> " + msg + "</p>";

  let reply = "I’m not sure about that. Try asking about skills, projects, or resume.";
  for (let i = 0; i < faqs.length; i++) {
    if (faqs[i].q.test(msg)) {
      reply = faqs[i].a;
      break;
    }
  }

  chatLog.innerHTML += "<p><strong>John:</strong> " + reply + "</p>";
  chatLog.scrollTop = chatLog.scrollHeight;
  chatInput.value = "";
});

// Send with Enter key
chatInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    chatSend.click();
  }
});
