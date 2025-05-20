let clickCount = 0;
let autoClickerInterval = null;
let isAutoClicking = false;
let clickValue = 1;
let autoClickSpeed = 1000; // Default auto-click speed
let upgradeClickCost = 10;
let upgradeAutoCost = 50;

document.getElementById('clicker-button').onclick = function() {
    clickCount += clickValue;
    document.getElementById('clicks').textContent = clickCount;
};

// Auto-clicker toggle button
document.getElementById('autoclicker-toggle').onclick = function() {
    if (isAutoClicking) {
        clearInterval(autoClickerInterval);
        document.getElementById('autoclicker-toggle').textContent = "Start Auto-Clicker";
    } else {
        autoClickerInterval = setInterval(() => {
            clickCount += clickValue;
            document.getElementById('clicks').textContent = clickCount;
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
        document.getElementById('clicks').textContent = clickCount;
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
        document.getElementById('clicks').textContent = clickCount;
        document.getElementById('upgrade-auto').textContent = `Upgrade Auto-Clicker (Cost: ${upgradeAutoCost})`;
    }
};