'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0; // se crea la variable para que no se reinicie en cada juego.
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //RECUERDA, se necesitan de dos variables para los if/else statements. No tiene que ser const guess = secretNumber.
  console.log(guess, typeof guess);

  // When there is not input.
  if (!guess) {
    // (!) -> SE TIENE QUE VOLVER VERDADERO. ¿POR QUÉEEEE?
    //document.querySelector('.message').textContent = 'No Number!';
    displayMessage('No Number!'); //VERSION RESUMIDA
    // When player wins
  } else if (guess === secretNumber) {
    //DOS VARIABLES
    //document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber; //Se pone aqui porque cuando se gane se revelará el número.
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong (UNA FORMA SUPER RESUMIDA)
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // SE PONE 1 PORQUE SI LE PONES 0, EN 0 SEGUIRA APARECIENDO TOO HIGH/LOW.
      //document.querySelector('.message').textContent =
      //guess > secretNumber ? 'Too High!' : 'Too Low!';  // versión NO resumida.
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!'); //RECUERDA: '?'  y ':' son TERNARY OPERATOR (una especie de if/else)
      score--; //Recuerda que -- es -1: socore = socore -1.
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost Asshole!'); //version resumida
      document.querySelector('.score').textContent = 0; //Es para que no pase -1, -2 ...
    }
  }
});

/*  (FORMA PARA NADA RESUMIDA xd) Evitar la repetición de códigos.
    When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      // SE PONE 1 PORQUE SI LE PONES 0, EN 0 SEGUIRA APARECIENDO TOO HIGH/LOW.
      document.querySelector('.message').textContent = 'Too High!';
      score--; //Recuerda que -- es -1: socore = socore -1.
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost Asshole!';
      document.querySelector('.score').textContent = 0; //Es para que no pase -1, -2 ...
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--; //No tienes que poner let/const
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost Asshole!';
      document.querySelector('.score').textContent = 0;
    }
  } */

document.querySelector('.again').addEventListener('click', function () {
  score = 20; //No tienes que poner let/const
  secretNumber = Math.trunc(Math.random() * 20) + 1; //No tienes que poner let/const

  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...'); //versión resumida
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
