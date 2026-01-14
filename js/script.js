// ?? Recupero gli elemtni HTML
const numbersDisplay = document.getElementById("numbers-list");
const countdown = document.getElementById("countdown");
const inputForm = document.getElementById("answers-form");
const inputNums = document.getElementById("input-group");
const send = document.getElementById("send-btn");
const input1 = document.getElementById("input-cell-1");
const input2 = document.getElementById("input-cell-2");
const input3 = document.getElementById("input-cell-3");
const input4 = document.getElementById("input-cell-4");
const input5 = document.getElementById("input-cell-5");
const outcome = document.getElementById("message");

// ?? Genero 5 numeri casuali
const randomNumbers = []; // ?? Creo array vuoto in cui inserirli

for (let i = 0; i < 5; i++) {
  const randomNumber = Math.floor(Math.random() * 100 + 1);
  console.log(randomNumber);

  randomNumbers.push(randomNumber);
  numbersDisplay.innerText = randomNumbers.join(" "); // ?? Mostro in HTML
}

// ?? Imposto il countdown
let countdownSec = 2;

const intervalId = setInterval(countDownTimer, 1000);
countDownTimer();

function countDownTimer() {
  countdownSec--;
  countdown.innerText = countdownSec; // ?? Aggiungo il countdown in HTML

  if (countdownSec <= 0) {
    clearInterval(intervalId);
    numbersDisplay.classList.add("d-none"); // ?? allo 0 deve sparire la lista dei numeri
    inputForm.classList.remove("d-none"); // ?? e deve apparire il form
  }
}

// !!  ------------------------- Form --------------------------------------

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userValue1 = parseInt(input1.value);
  const userValue2 = parseInt(input2.value);
  const userValue3 = parseInt(input3.value);
  const userValue4 = parseInt(input4.value);
  const userValue5 = parseInt(input5.value);

  // ?? Creo un secondo array che conterrà i valori inseriti dall'utente
  const userInput = [
    userValue1,
    userValue2,
    userValue3,
    userValue4,
    userValue5,
  ];

  let commonNums = [];

  for (let i = 0; i < userInput.length; i++) {
    const currentValue = userInput[i];

    if (randomNumbers.indexOf(currentValue) !== -1) {
      commonNums.push(currentValue);
      console.log(commonNums);
    }
  }
  if (commonNums.length > 0) {
    outcome.innerText = `Hai indovinato ${commonNums.length} numeri`;
  } else {
    outcome.innerText = `Non hai indovinato nessun numero`;
  }
  outcome.classList.add("text-black");
});
