// Retrieve saved stats from localStorage, or use default values if not found
let clickCount = parseInt(localStorage.getItem('clickCount')) || 0;
let clickValue = parseInt(localStorage.getItem('clickValue')) || 1;
let autoClickSpeed = parseInt(localStorage.getItem('autoClickSpeed')) || 1000;
let upgradeClickCost = parseInt(localStorage.getItem('upgradeClickCost')) || 10;
let upgradeAutoCost = parseInt(localStorage.getItem('upgradeAutoCost')) || 50;
let isAutoClicking = false;
let autoClickerInterval = null;

// Display current stats on page load
document.getElementById('clicks').textContent = clickCount;

document.getElementById('clicker-button').onclick = function() {
    clickCount += clickValue;
    updateStats();
};

// Auto-clicker toggle button
document.getElementById('autoclicker-toggle').onclick = function() {
    if (isAutoClicking) {
        clearInterval(autoClickerInterval);
        document.getElementById('autoclicker-toggle').textContent = "Start Auto-Clicker";
    } else {
        autoClickerInterval = setInterval(() => {
            clickCount += clickValue;
            updateStats();
        }, autoClickSpeed);
        document.getElementById('autoclicker-toggle').textContent = "Stop Auto-Clicker";
    }
    isAutoClicking = !isAutoClicking;
};

// Upgrade click value
document.getElementById('upgrade-click').onclick = function() {
    if (clickCount >= upgradeClickCost) {
        clickCount -= upgradeClickCost;
        clickValue++;
        upgradeClickCost = Math.floor(upgradeClickCost * 1.5); // Increase upgrade cost
        updateStats();
        document.getElementById('upgrade-click').textContent = `Upgrade Click (Cost: ${upgradeClickCost})`;
    }
};

// Upgrade auto-clicker speed
document.getElementById('upgrade-auto').onclick = function() {
    if (clickCount >= upgradeAutoCost) {
        clickCount -= upgradeAutoCost;
        if (autoClickSpeed > 200) { // Don't make auto-clicker too fast
            autoClickSpeed -= 200; // Decrease the interval for faster auto-clicking
        }
        upgradeAutoCost = Math.floor(upgradeAutoCost * 1.5); // Increase upgrade cost
        updateStats();
        document.getElementById('upgrade-auto').textContent = `Upgrade Auto-Clicker (Cost: ${upgradeAutoCost})`;
    }
};

// Update stats in localStorage and on the page
function updateStats() {
    // Save the updated stats to localStorage
    localStorage.setItem('clickCount', clickCount);
    localStorage.setItem('clickValue', clickValue);
    localStorage.setItem('autoClickSpeed', autoClickSpeed);
    localStorage.setItem('upgradeClickCost', upgradeClickCost);
    localStorage.setItem('upgradeAutoCost', upgradeAutoCost);
    
    // Update the stats on the page
    document.getElementById('clicks').textContent = clickCount;
}