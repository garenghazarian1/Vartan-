document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("eventLandingOverlay");
  const closeButton = document.querySelector(".close-overlay");

  // Check if the overlay was already shown
  if (!localStorage.getItem("overlayShown")) {
    overlay.style.display = "flex"; // Show the overlay

    // Set 'overlayShown' in localStorage
    localStorage.setItem("overlayShown", "true");

    // Optional: Automatically hide the overlay after a specific time
    setTimeout(() => {
      overlay.style.display = "none";
    }, 10000); // hides after 10 seconds
  } else {
    overlay.style.display = "none"; // Hide the overlay if already shown before
  }

  closeButton.addEventListener("click", () => {
    overlay.style.display = "none";
  });
});
