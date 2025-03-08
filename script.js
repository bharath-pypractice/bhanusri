document.addEventListener("DOMContentLoaded", () => {
    // Typewriter Effect
    const roles = [
      "Web Developer",
      "FullStack Developer",
      "Django Development",
      "App Developer",
      "Video Editor",
    ];
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const pauseTime = 2000;
    const typewriterSpan = document.querySelector(".typewriter-text");
  
    function typeEffect() {
      if (!typewriterSpan) return;
      const currentWord = roles[index];
  
      if (!isDeleting) {
        typewriterSpan.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentWord.length) {
          isDeleting = true;
          setTimeout(typeEffect, pauseTime);
          return;
        }
      } else {
        typewriterSpan.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          index = (index + 1) % roles.length;
        }
      }
      setTimeout(typeEffect, isDeleting ? typingSpeed / 2 : typingSpeed);
    }
  
    typeEffect();
  
    // Mobile Menu Toggle
    function hamburg() {
      const dropdown = document.querySelector(".dropdown");
      const menuIcon = document.querySelector(".menu-icon");
      const closeIcon = document.querySelector(".close-icon");
      if (dropdown) dropdown.classList.add("active");
      if (menuIcon) menuIcon.style.display = "none";
      if (closeIcon) closeIcon.style.display = "block";
    }
  
    function cancel() {
      const dropdown = document.querySelector(".dropdown");
      const menuIcon = document.querySelector(".menu-icon");
      const closeIcon = document.querySelector(".close-icon");
      if (dropdown) dropdown.classList.remove("active");
      if (menuIcon) menuIcon.style.display = "block";
      if (closeIcon) closeIcon.style.display = "none";
    }
  
    // Hide menu icon on larger screens
    function checkScreenSize() {
      const menuIcon = document.querySelector(".menu-icon");
      const closeIcon = document.querySelector(".close-icon");
      if (window.innerWidth > 1024) {
        if (menuIcon) menuIcon.style.display = "none";
        if (closeIcon) closeIcon.style.display = "none";
      } else {
        if (menuIcon) menuIcon.style.display = "block";
        if (closeIcon) closeIcon.style.display = "none";
      }
    }
  
    // Close navbar when clicking a nav item
    function closeNavbarOnClick() {
      const navItems = document.querySelectorAll(".dropdown a");
      navItems.forEach((item) => {
        item.addEventListener("click", cancel);
      });
    }
  
    // Run on resize and load
    window.addEventListener("resize", checkScreenSize);
    window.addEventListener("load", () => {
      checkScreenSize();
      closeNavbarOnClick();
    });
  
    // Expose functions to global scope
    window.hamburg = hamburg;
    window.cancel = cancel;
  });