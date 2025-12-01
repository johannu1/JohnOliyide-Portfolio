// Navigation smooth scroll
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    let section = document.querySelector(this.getAttribute("href"));
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
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

// --------------------
// Chatbot (Responses)
// --------------------

let faqs = [
  {
    q: /(skills|what can you do|strengths|what do you know)/i,
    a: "I’m good at fixing computers and Apple devices. I know how to troubleshoot iPhones and Macs, set up Wi-Fi modems, and use Apple tools like Mobile Genius, GSX, and Repair Central. I’ve also worked with BitLocker, Active Directory, and basic computer setup."
  },
  {
    q: /(code|program|developer|html|css|javascript|web)/i,
    a: "I build clean and simple websites using HTML, CSS, and JavaScript. This portfolio is an example of my work."
  },
  {
    q: /(experience|work|job|apple|genius)/i,
    a: "I work at Apple as a Genius. I repair iPhones and Macs, help customers with software issues, and support people at the Genius Bar. I also help newer technicians learn repairs."
  },
  {
    q: /(network|wifi|router|modem|bitlocker|active directory|networking)/i,
    a: "I’ve set up Wi-Fi modems, configured computers, and used tools like BitLocker and Active Directory. I’m also learning more about network security through my tech classes."
  },
  {
    q: /(language|yoruba|speak)/i,
    a: "I speak English and Yoruba."
  },
  {
    q: /(projects?|what have you built|portfolio)/i,
    a: "Some of my projects include this portfolio website, my 'Big Hack' security paper, a Wireshark HTTP capture lab, and an Nmap scan in Kali Linux. They’re all in the Projects section."
  },
  {
    q: /(resume|cv)/i,
    a: "My resume is available in the Resume section. You can view it or download it anytime."
  },
  {
    q: /(music|drums?|record label|johannu)/i,
    a: "I’m a drummer and I own a record label in Nigeria called Johannu Records International. I play at churches, events, and parties."
  },
  {
    q: /(goals?|future|plans|security|network security)/i,
    a: "My goal is to grow in my role at Apple and get deeper into network security. I enjoy learning new things and improving my tech skills."
  },
  {
    q: /(contact|reach you|email|get in touch)/i,
    a: "You can reach me through the Contact form on this website. I’ll respond as soon as I can. Have a great day!"
  }
];

let chatToggle = document.getElementById("chat-toggle");
let chatPanel = document.getElementById("chat-panel");
let chatLog = document.getElementById("chat-log");
let chatInput = document.getElementById("chat-input");
let chatSend = document.getElementById("chat-send");

// Toggle chatbot open/close
chatToggle.addEventListener("click", function() {
  chatPanel.classList.toggle("hidden");
});

// Send message
chatSend.addEventListener("click", function() {
  let msg = chatInput.value.trim();
  if (!msg) return;

  chatLog.innerHTML += "<p><strong>You:</strong> " + msg + "</p>";

  let reply = "I'm not sure about that. Try asking about my skills, projects, experience, or music.";

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
