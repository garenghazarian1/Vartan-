document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("eventLandingOverlay");
  const closeButton = document.querySelector(".close-overlay");

  closeButton.addEventListener("click", () => {
    overlay.style.display = "none";
  });

  // Optional: Automatically hide the overlay after a few seconds
  setTimeout(() => {
    overlay.style.display = "none";
  }, 100000); // hides after 10 seconds
});
