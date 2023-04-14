let secretNumber = generateNumber();
let score = 0;

// Get references to the input, result, and score elements
const guessInput = document.getElementById("guessInput");
const result = document.getElementById("result");
const scoreDisplay = document.getElementById("score");
const submitButton = document.querySelector("button");

// Check the player's guess and update the result and score
function checkGuess() {
  const guess = parseInt(guessInput.value);
  if (guess === secretNumber) {
    result.textContent = "Congratulations! You guessed the number.";
    score++;
    scoreDisplay.textContent = score;
    submitButton.disabled = true;
    setTimeout(() => {
      submitButton.disabled = false;
      secretNumber = generateNumber();
    }, 1000);
  } else if (guess < secretNumber) {
    result.textContent = "Too low. Try again.";
  } else {
    result.textContent = "Too high. Try again.";
  }
  guessInput.value = "";
}

// Generate a random number between 1 and 10
function generateNumber() {
  return Math.floor(Math.random() * 10) + 1;
}
