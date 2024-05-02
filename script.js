const numStars = 100; // Number of stars
const starContainer = document.getElementById('star-container');

// Function to generate a random number between min and max
function random(min, max) {
  return Math.random() * (max - min) + min;
}

// Create stars
for (let i = 0; i < numStars; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.left = random(0, 100) + 'vw';
  star.style.top = random(0, 100) + 'vh';
  star.style.animationDuration = random(2, 6) + 's';
  star.style.animationDelay = random(0, 3) + 's';
  starContainer.appendChild(star);
}
