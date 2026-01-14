// ?? Recupero gli elemtni HTML
const numbersDisplay = document.getElementById("numbers-list");
const countdown = document.getElementById("countdown");
const inputNums = document.getElementById("answers-form");

// ?? Genero 5 numeri casuali
const randomNumbers = []; // ?? Creo array vuoto in cui inserirli

for (let i = 0; i < 5; i++) {
  const randomNumber = Math.floor(Math.random() * 100 + 1);
  console.log(randomNumber);
  randomNumbers.push(randomNumber);
  numbersDisplay.innerText = randomNumbers.join(" "); // ?? Mostro in HTML
}
console.log(randomNumbers);

// ?? Imposto il countdown
let countdownSec = 11;

const intervalId = setInterval(countDownTimer, 1000);
countDownTimer();

function countDownTimer() {
  countdownSec--;
  console.log(countdownSec);
  countdown.innerText = countdownSec; // ?? Aggiungo il countdown in HTML

  if (countdownSec <= 0) {
    clearInterval(intervalId);
    numbersDisplay.classList.add("d-none"); // ?? allo 0 deve sparire la lista dei numeri
    inputNums.classList.remove("d-none"); // ?? e deve apparire il form
  }
}
