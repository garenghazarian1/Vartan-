// sidebar.js

export function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const hamburger = document.querySelector(".hamburger");
  sidebar.classList.toggle("open");
  hamburger.style.display = sidebar.classList.contains("open")
    ? "none"
    : "block";
}

export function closeSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const hamburger = document.querySelector(".hamburger");
  sidebar.classList.remove("open");
  hamburger.style.display = "block";
}

export function setupSidebarLinks() {
  const sidebarLinks = document.querySelectorAll(".sidebar a");
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", closeSidebar);
  });
}

// Utility function to debounce events
function debounce(func, wait = 100) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", toggleSidebar);

  document.addEventListener("click", function (event) {
    const sidebar = document.querySelector(".sidebar");
    if (!sidebar.contains(event.target) && sidebar.classList.contains("open")) {
      toggleSidebar();
    }
  });

  // Debounced scroll listener
  document.addEventListener(
    "scroll",
    debounce(() => {
      const sidebar = document.querySelector(".sidebar");
      if (sidebar.classList.contains("open")) {
        closeSidebar();
      }
    })
  );
});
