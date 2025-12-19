console.log("JS collegato")
// Creare un numero random  da 1 a 6 sia per il player che per il computer e stampare
const playerRoll = Math.floor(Math.random()*6) + 1;
const computerRoll = Math.floor(Math.random() * 6) + 1;

console.log("Giocatore:", playerRoll);
console.log("Computer:", computerRoll);

// - Se giocatore > computer  vince giocatore - Se computer > giocatore vince computer - Altrimenti pareggio
if (playerRoll > computerRoll) {
  console.log("Hai vinto!");
} else if (computerRoll > playerRoll) {
  console.log("Ha vinto il computer!");
} else {
  console.log("Pareggio!");
}

