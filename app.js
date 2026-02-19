console.log("js working");
// Display
const passwordInput = document.getElementById("password");
const copyBtn = document.getElementById("copy-btn");

// Length
const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("length-value");

// Options
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");

// Strength bars
const strengthBars = document.querySelectorAll(".bar");

// Generate button
const generateBtn = document.getElementById("generate-btn");

lengthValue.textContent = lengthSlider.value;

lengthSlider.addEventListener("input", () => {
  lengthValue.textContent = lengthSlider.value;
});


const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+-=[]{}|;:,.<>?";



const strengthText = document.querySelector(".strength-text");
function getSelectedCount() {
  let count = 0;
  if (uppercaseCheckbox.checked) count++;
  if (lowercaseCheckbox.checked) count++;
  if (numbersCheckbox.checked) count++;
  if (symbolsCheckbox.checked) count++;
  return count;
}

function resetStrengthBars() {
  strengthBars.forEach(bar => {
    bar.style.backgroundColor = "transparent";
    bar.style.borderColor = "var(--grey-200)";
  });
}

function setStrength(level, color) {
  resetStrengthBars();
  strengthText.textContent = level;
  strengthText.style.color = "var(--white)";

  for (let i = 0; i < level; i++) {
    strengthBars[i].style.backgroundColor = color;
    strengthBars[i].style.borderColor = color;
  }
}
function calculateStrength() {
  const length = Number(lengthSlider.value);
  const selectedCount = getSelectedCount();

  if (selectedCount <= 1 || length < 6) {
    setStrength(1, "var(--red)");
    strengthText.textContent = "WEAK";
  } 
  else if (selectedCount === 2 && length >= 6) {
    setStrength(2, "var(--orange)");
    strengthText.textContent = "MEDIUM";
  } 
  else if (selectedCount === 3 && length >= 8) {
    setStrength(3, "var(--yellow)");
    strengthText.textContent = "STRONG";
  } 
  else if (selectedCount === 4 && length >= 10) {
    setStrength(4, "var(--green)");
    strengthText.textContent = "VERY STRONG";
  }
}


function generatePassword() {
  const length = Number(lengthSlider.value);
  let characters = "";
  let password = "";

  if (uppercaseCheckbox.checked) {
    characters += UPPERCASE;
  }

  if (lowercaseCheckbox.checked) {
    characters += LOWERCASE;
  }

  if (numbersCheckbox.checked) {
    characters += NUMBERS;
  }

  if (symbolsCheckbox.checked) {
    characters += SYMBOLS;
  }

  // Validation
  if (characters === "") {
    alert("Select at least one option");
    return;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  console.log(password);
  passwordInput.value = password;
  calculateStrength();
}
generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {
  if (!passwordInput.value) return;

  navigator.clipboard.writeText(passwordInput.value);
  copyBtn.innerHTML = "Copied!";
  
  setTimeout(() => {
    copyBtn.innerHTML = `<img src="./starter-code/assets/images/icon-copy.svg">`;
  }, 1500);
});


lengthSlider.addEventListener("input", calculateStrength);

[
  uppercaseCheckbox,
  lowercaseCheckbox,
  numbersCheckbox,
  symbolsCheckbox
].forEach(cb => cb.addEventListener("change", calculateStrength));