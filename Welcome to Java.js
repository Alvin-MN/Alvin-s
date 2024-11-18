const greetings = [
  "Welcome to the world of JavaScript, ",
  "Hello there, ",
  "Great to see you, ",
  "Ready to code, ",
  "JavaScript awaits you, ",
  "Hope you're having a great time!, ",
  "Wagwaaaaaaaaaaaan!!,",
];

function customGreet() {
  const nameInput = document.getElementById("name-input").value;
  const welcomeText = document.getElementById("welcome-text");

  if (nameInput) {
      const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
      welcomeText.innerText = `${randomGreeting}${nameInput}!`;
  } else {
      welcomeText.innerText = "Please enter your name!";
  }
}

document.getElementById("greet-btn").addEventListener("click", customGreet);

const themeToggleBtn = document.getElementById("theme-toggle-btn");
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  document.body.classList.toggle("dark-mode");
});

document.addEventListener("mousemove", (e) => {
  const customCursor = document.getElementById("custom-cursor");
  customCursor.style.left = `${e.pageX}px`;
  customCursor.style.top = `${e.pageY}px`;
});

document.addEventListener("click", () => {
  const customCursor = document.getElementById("custom-cursor");
  customCursor.style.transform = "scale(1.5)";
  setTimeout(() => {
      customCursor.style.transform = "scale(1)";
  }, 150);
});


function handleButtonClick(event) {
  hello();
  createParticleExplosion(event);
}


const changeTextBtn = document.getElementById("change-text-btn");
changeTextBtn.addEventListener("click", handleButtonClick);


function hello() {
  const welcomeText = document.getElementById("welcome-text");
  const newMessage = "JavaScript is the most popular language";
  
  if (welcomeText.innerText !== newMessage) {
      welcomeText.innerText = newMessage;
  }
  
  welcomeText.classList.add("pulse-animation");
  const button = document.getElementById("change-text-btn");
  button.style.backgroundColor = getRandomColor();
}



function createParticleExplosion(event) {
  const button = event.currentTarget;
  const numParticles = 30;

  for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");
      document.body.appendChild(particle);

      particle.style.backgroundColor = getRandomColor();

      const { x, y } = button.getBoundingClientRect();
      particle.style.left = `${x + button.offsetWidth / 2}px`;
      particle.style.top = `${y + button.offsetHeight / 2}px`;

      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.random() * 50 + 30;
      particle.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
      particle.style.setProperty("--y", `${Math.sin(angle) * distance}px`);

      particle.addEventListener("animationend", () => {
          particle.remove();
      });
  }
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
