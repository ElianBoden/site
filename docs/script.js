// Initialize game stats or load from localStorage
let clickCount = parseInt(localStorage.getItem('clickCount')) || 0;
let clickValue = parseInt(localStorage.getItem('clickValue')) || 1;
let autoClickSpeed = parseInt(localStorage.getItem('autoClickSpeed')) || 1000;
let upgradeClickCost = parseInt(localStorage.getItem('upgradeClickCost')) || 10;
let upgradeAutoCost = parseInt(localStorage.getItem('upgradeAutoCost')) || 50;
let isAutoClicking = false;
let autoClickerInterval = null;

// Load click count into the display
document.getElementById('clicks').textContent = clickCount;

// Function to update and save stats to localStorage
function updateStats() {
    // Save stats in localStorage
    localStorage.setItem('clickCount', clickCount);
    localStorage.setItem('clickValue', clickValue);
    localStorage.setItem('autoClickSpeed', autoClickSpeed);
    localStorage.setItem('upgradeClickCost', upgradeClickCost);
    localStorage.setItem('upgradeAutoCost', upgradeAutoCost);

    // Update the display
    document.getElementById('clicks').textContent = clickCount;
}

// Clicker button functionality
document.getElementById('clicker-button').onclick = function() {
    clickCount += clickValue;
    updateStats();  // Save and update stats
};

// Auto-clicker toggle functionality
document.getElementById('autoclicker-toggle').onclick = function() {
    if (isAutoClicking) {
        clearInterval(autoClickerInterval);
        document.getElementById('autoclicker-toggle').textContent = "Start Auto-Clicker";
    } else {
        autoClickerInterval = setInterval(() => {
            clickCount += clickValue;
            updateStats();  // Save and update stats after each auto-click
        }, autoClickSpeed);
        document.getElementById('autoclicker-toggle').textContent = "Stop Auto-Clicker";
    }
    isAutoClicking = !isAutoClicking;
};

// Upgrade click value
document.getElementById('upgrade-click').onclick = function() {
    if (clickCount >= upgradeClickCost) {
        clickCount -= upgradeClickCost;
        clickValue++;  // Increase click value
        upgradeClickCost = Math.floor(upgradeClickCost * 1.5);  // Increase cost for next upgrade
        updateStats();  // Save stats and update UI
        document.getElementById('upgrade-click').textContent = `Upgrade Click (Cost: ${upgradeClickCost})`;
    } else {
        alert("You need more clicks to upgrade!");
    }
};

// Upgrade auto-clicker speed
document.getElementById('upgrade-auto').onclick = function() {
    if (clickCount >= upgradeAutoCost) {
        clickCount -= upgradeAutoCost;
        if (autoClickSpeed > 200) {  // Prevent the auto-clicker from going too fast
            autoClickSpeed -= 200;  // Decrease interval to speed up auto-clicker
        }
        upgradeAutoCost = Math.floor(upgradeAutoCost * 1.5);  // Increase cost for next upgrade
        updateStats();  // Save stats and update UI
        document.getElementById('upgrade-auto').textContent = `Upgrade Auto-Clicker (Cost: ${upgradeAutoCost})`;
    } else {
        alert("You need more clicks to upgrade!");
    }
};

// Initialize the page with the correct values for upgrades
document.getElementById('upgrade-click').textContent = `Upgrade Click (Cost: ${upgradeClickCost})`;
document.getElementById('upgrade-auto').textContent = `Upgrade Auto-Clicker (Cost: ${upgradeAutoCost})`;