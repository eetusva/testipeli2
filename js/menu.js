function showInstructions() {
  document.getElementById("instructionsModal").style.display = "block";
}

function closeInstructions() {
  document.getElementById("instructionsModal").style.display = "none";
}

// Function to create floating logos
function createFloatingLogo() {
  const logoContainer = document.querySelector('.floating-logos');
  const logo = document.createElement('img');
  logo.src = 'kuvat/matologo.png';
  logo.className = 'floating-logo';
  
  // Randomize the starting position and animation duration
  logo.style.left = Math.random() * 100 + 'vw';
  logo.style.animationDuration = Math.random() * 3 + 3 + 's'; // Adjust duration here
  
  // Add the logo to the container
  logoContainer.appendChild(logo);
  
  // Remove the logo after the animation is done
  setTimeout(() => {
    logoContainer.removeChild(logo);
  }, 6000); // Adjust this time to match the animation duration
}

// Create floating logos at intervals
setInterval(createFloatingLogo, 500); // Adjust the interval here (500ms)

// Initial batch of logos
for (let i = 0; i < 10; i++) {
  createFloatingLogo();
}

function startGame() {
  var difficulty = document.getElementById("difficulty").value;
  window.location.href = "mato.html?difficulty=" + difficulty;
}
