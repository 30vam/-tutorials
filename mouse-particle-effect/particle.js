const body = document.querySelector("body");

function generateRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function createParticle(
  x,
  y,
  minSize,
  maxSize,
  movementAmount,
  minDuration,
  maxDuration
) {
  const particle = document.createElement("div");
  particle.classList.add("particle");

  const size = generateRandomNumber(minSize, maxSize);
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;

  const finalPosX = generateRandomNumber(-movementAmount, movementAmount);
  const finalPosY = generateRandomNumber(-movementAmount, movementAmount);
  particle.style.setProperty("--final-pos-x", `${finalPosX}px`);
  particle.style.setProperty("--final-pos-y", `${finalPosY}px`);

  const duration = generateRandomNumber(minDuration, maxDuration);
  particle.style.animationDuration = `${duration}s`;

  body.appendChild(particle);
  setTimeout(() => particle.remove(), duration * 1000);
}

document.addEventListener("mousemove", e => {
  createParticle(e.clientX, e.clientY, 2, 8, 200, 4, 1);
});
