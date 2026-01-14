// ?? Recupero gli elemtni HTML
const numbersDisplay = document.getElementById("numbers-list");
const countdown = document.getElementById("countdown");

// ?? Genero 5 numeri casuali che vanno sia mostrati all'utente, sia inseriti in un array vuoto
const randomNumbers = [];

for (let i = 0; i < 5; i++) {
  const randomNumber = Math.floor(Math.random() * 100 + 1);
  console.log(randomNumber);
  randomNumbers.push(randomNumber);
  numbersDisplay.innerText = randomNumbers.join(" ");
}
console.log(randomNumbers);

// ?? Imposto il countdown
let countdownSec = 11;

const intervalId = setInterval(countDownTimer, 1000);
countDownTimer();

function countDownTimer() {
  countdownSec--;
  console.log(countdownSec);
  countdown.innerText = countdownSec;

  if (countdownSec <= 0) {
    clearInterval(intervalId);
  }
}

// ?? Aggiungo il countdown in HTML
