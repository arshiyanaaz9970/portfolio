document.addEventListener("DOMContentLoaded", function() {

  // --------------------------
  // 1. Project Filter Buttons
  // --------------------------
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectItems = document.querySelectorAll(".project-item");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");
      projectItems.forEach(item => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // --------------------------
  // 2. Display Current Year
  // --------------------------
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.innerText = new Date().getFullYear();
  }

  // --------------------------
  // 3. Theme Toggle
  // --------------------------
  const toggle = document.getElementById("themeToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      toggle.innerText = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });
  }

  // --------------------------
  // 4. Typing Effect
  // --------------------------
  const typingEl = document.getElementById("typing");
  if (typingEl) {
    const text = "Frontend Developer | JavaScript Enthusiast";
    let index = 0;
    function typeEffect() {
      if (index < text.length) {
        typingEl.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
      }
    }
    typeEffect();
  }

  // --------------------------
  // 5. Scroll-Activated Navbar Links
  // --------------------------
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 150) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });

  // --------------------------
  // 6. Scroll-to-Top Button
  // --------------------------
  const topBtn = document.getElementById("topBtn");
  if (topBtn) {
    window.addEventListener("scroll", () => {
      topBtn.style.display = document.documentElement.scrollTop > 200 ? "block" : "none";
    });

    topBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // --------------------------
  // 7. Skill Bar Animation
  // --------------------------
  const skillBars = document.querySelectorAll(".skill-bar");
  window.addEventListener("scroll", () => {
    skillBars.forEach(bar => {
      const position = bar.getBoundingClientRect().top;
      if (position < window.innerHeight) {
        bar.style.width = bar.getAttribute("data-width");
      }
    });
  });

  // --------------------------
  // 8. Fade-in Sections
  // --------------------------
  const faders = document.querySelectorAll("section");
  window.addEventListener("scroll", () => {
    faders.forEach(section => {
      const position = section.getBoundingClientRect().top;
      if (position < window.innerHeight - 100) {
        section.classList.add("show", "fade-in");
      }
    });
  });

  // --------------------------
  // 9. Open Project Modal
  // --------------------------
  window.openModal = function(src) {
    const modalImage = document.getElementById("modalImage");
    const modalEl = document.getElementById("projectModal");
    if (modalImage && modalEl && typeof bootstrap !== "undefined") {
      modalImage.src = src;
      const modal = new bootstrap.Modal(modalEl);
      modal.show();
    }
  };

  // --------------------------
  // 10. Contact Form Validation
  // --------------------------
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const name = this.querySelector("input[type='text']").value.trim();
      const email = this.querySelector("input[type='email']").value.trim();
      const message = this.querySelector("textarea").value.trim();

      if (!name || !email || !message) {
        alert("Please fill all fields");
        return;
      }
      if (!email.includes("@")) {
        alert("Enter valid email");
        return;
      }

      alert("Message Sent Successfully!");
      this.reset();
    });
  }

});