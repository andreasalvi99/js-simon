// ?? Genero 5 numeri casuali che vanno sia mostrati all'utente, sia inseriti in un array vuoto

const randomNumbers = [];
console.log(randomNumbers);

for (let i = 0; i < 5; i++) {
  const randomNumber = Math.floor(Math.random() * 100 + 1);
  console.log(randomNumber);
  randomNumbers.push(randomNumber);
}
