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

function getRandomChar(str) {
  const index = Math.floor(Math.random() * str.length);
  return str[index];
}

function shuffleString(str) {
  return str
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
}
function generatePassword() {
  const length = Number(lengthSlider.value);
  let password = "";
  let characters = [];

  // Step 1: Force at least one from each selected type
  if (uppercaseCheckbox.checked) {
    password += getRandomChar(UPPERCASE);
    characters.push(UPPERCASE);
  }

  if (lowercaseCheckbox.checked) {
    password += getRandomChar(LOWERCASE);
    characters.push(LOWERCASE);
  }

  if (numbersCheckbox.checked) {
    password += getRandomChar(NUMBERS);
    characters.push(NUMBERS);
  }

  if (symbolsCheckbox.checked) {
    password += getRandomChar(SYMBOLS);
    characters.push(SYMBOLS);
  }

  // ❗ Validation
  if (characters.length === 0) {
    alert("Select at least one option");
    return;
  }

  // Step 2: Fill remaining length
  while (password.length < length) {
    const randomSet =
      characters[Math.floor(Math.random() * characters.length)];
    password += getRandomChar(randomSet);
  }

  // Step 3: Shuffle final password
  password = shuffleString(password);

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
