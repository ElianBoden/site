let clickCount = 0;
let autoClickerInterval = null; // Stores the interval for auto-clicker
let isAutoClicking = false; // Tracks whether the auto-clicker is active

// Handle regular button click
document.getElementById('clicker-button').onclick = function() {
    clickCount++;
    document.getElementById('clicks').textContent = clickCount;
};

// Handle auto-clicker toggle button
document.getElementById('autoclicker-toggle').onclick = function() {
    if (isAutoClicking) {
        // Stop the auto-clicker
        clearInterval(autoClickerInterval);
        document.getElementById('autoclicker-toggle').textContent = "Start Auto-Clicker";
    } else {
        // Start the auto-clicker
        autoClickerInterval = setInterval(() => {
            clickCount++;
            document.getElementById('clicks').textContent = clickCount;
        }, 1000); // 1000ms = 1 second
        document.getElementById('autoclicker-toggle').textContent = "Stop Auto-Clicker";
    }
    isAutoClicking = !isAutoClicking; // Toggle the state
};