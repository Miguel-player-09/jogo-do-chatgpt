let targetNum = Math.floor(Math.random() * 100) + 1;
let guessInput = document.getElementById("guessInput");

function checkGuess() {
  let userGuess = Number(guessInput.value);
  let message = document.getElementById("message");

  if (userGuess === targetNum) {
    message.innerHTML = "Você acertou! O número era " + targetNum + ".";
  } else if (userGuess < targetNum) {
    message.innerHTML = "Seu palpite é muito baixo. Tente novamente.";
  } else {
    message.innerHTML = "Seu palpite é muito alto. Tente novamente.";
  }
}

