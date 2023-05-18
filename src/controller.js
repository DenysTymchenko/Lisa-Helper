import { showNumbersReplacer, hideNumbersReplacer } from "./view.js"; 

const queryInput = document.getElementById('query');
const numbersToggler = document.getElementById('numbers_toggler');

numbersToggler.addEventListener('change', () => {
  numbersToggler.checked ? showNumbersReplacer() : hideNumbersReplacer();
})
