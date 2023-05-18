import { renderLetters, showNumbersReplacer, hideNumbersReplacer } from "./view.js"; 

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
letters.forEach((letter) => renderLetters(letter));

const queryInput = document.getElementById('query');
const numbersToggler = document.getElementById('numbers_toggler');

numbersToggler.addEventListener('change', () => {
  numbersToggler.checked ? showNumbersReplacer() : hideNumbersReplacer();
})
