// Select all card hearts
const cardHearts = document.querySelectorAll(".card-heart");

// Select the navbar heart counter
const navbarHeartBtn = document.getElementById("navbar-heart");

// Initialize counter
let heartCount = 0;

// Function to update the navbar number
function updateNavbarCount() {
  navbarHeartBtn.firstChild.textContent = ` ${heartCount} `;
}

// Add click events to all card hearts
cardHearts.forEach(heart => {
  heart.addEventListener("click", () => {
    // Increase heart count
    heartCount++;

    // Optional: turn heart red for visual feedback
    heart.classList.remove("fa-regular", "text-gray-500");
    heart.classList.add("fa-solid", "text-red-500");

    updateNavbarCount();
  });
});
