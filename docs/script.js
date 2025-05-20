document.getElementById('animateButton').addEventListener('click', () => {
  const circle = document.getElementById('circle');
  circle.style.animation = 'moveCircle 2s forwards';

  setTimeout(() => {
    circle.style.opacity = 1;
  }, 500); // Delay opacity change for smoother transition
});

@keyframes moveCircle {
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  100% {
    transform: translateY(-200px);
    opacity: 1;
  }
}