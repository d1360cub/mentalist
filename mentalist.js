const secretNumber = parseInt(Math.floor(Math.random() * 100 + 1));
let userNumber = 0;

while (userNumber != secretNumber) {
  let userNumber = prompt('Ingrese un número entre 1 y 100');
  userNumber = parseInt(userNumber);
  if (userNumber > secretNumber) {
    alert('Te pasaste');
  } else if (userNumber < secretNumber) {
    alert('Estás por debajo');
  } else if (userNumber == secretNumber) {
    alert('Felicitaciones!!! Haz acertado el número');
    break;
  }
}
