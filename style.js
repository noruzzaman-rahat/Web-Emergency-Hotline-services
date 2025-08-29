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

//2nd part
// Coin Button
const coinBtn = document.getElementById("coinBtn");
let coins = parseInt(coinBtn.textContent);

// Call History container
const callHistoryContainer = document.getElementById("callHistory");

// Call Buttons
const callButtons = document.querySelectorAll(".callBtn");



// Handle Call
callButtons.forEach(btn => {
  btn.addEventListener("click", function () {
    if (coins < 20) {
      alert("Not enough coins to make this call!");
      return;
    }

    // Deduct 20 coins
    coins -= 20;
    coinBtn.innerHTML = `${coins} <img src="./assets/coin.png" 
      class="w-[25px] h-[25px] sm:w-[30px] sm:h-[30px]" alt="">`;

    // Find parent card
    const card = this.closest("div.border-2");
    if (!card) return;

    const serviceName = card.querySelector(".serviceName")?.textContent;
    const serviceNumber = card.querySelector(".serviceNumber")?.textContent;

    if (!serviceName || !serviceNumber) return;

    alert(`Calling ${serviceName} at number ${serviceNumber}`);
    const now = new Date();
    // Add to Call History
    const historyItem = document.createElement("div");
    historyItem.className =
      "w-full h-[83px] sm:h-auto bg-[#fafafa] rounded-lg p-4 flex flex-col justify-center";
    historyItem.innerHTML = `
      <h1 class="text-lg font-bold">${serviceName}</h1>
      <div class="flex justify-between text-[#5c5c5c]">
        <p>${serviceNumber}</p>
        <p>${new Date().toLocaleTimeString()}</p>
      </div>
    `;
    callHistoryContainer.appendChild(historyItem);
  });
});


// Clear History button
const clearBtn = document.getElementById('clearHistory');
clearBtn.addEventListener('click', () => {
  callHistoryContainer.innerHTML = '';
});


//another
// Select all copy buttons

// Select the navbar copy counter
const copyCounter = document.getElementById('copyCounter');

// Initialize counter at 0
let counter = 0;
copyCounter.textContent = `${counter} Copy`;

// Copy Buttons
const copyButtons = document.querySelectorAll(".copyBtn");

// Loop through each copy button
copyButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the hotline number (use serviceNumber class)
    const card = button.closest("div.border-2");
    if (!card) return;

    const number = card.querySelector(".serviceNumber")?.textContent;
    
    if (!number) return;

    // Copy to clipboard
    navigator.clipboard.writeText(number)
      .then(() => {
        // Alert the user
        alert(`Hotline number ${number} copied!`);

        // Increment the counter
        counter += 1;
        copyCounter.textContent = `${counter} Copy`;
      })
      .catch(err => console.error('Failed to copy text:', err));
  });
});
