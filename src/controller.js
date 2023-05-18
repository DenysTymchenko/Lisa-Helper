import { renderLetters, showNumbersReplacer, hideNumbersReplacer } from './view.js';
import { getNewQuery, getDefaultNumber } from './model.js';

const queryInput = document.getElementById('query');
const numbersToggler = document.getElementById('numbers_toggler');
numbersToggler.checked = false;

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
letters.forEach((letter) => renderLetters(letter));

numbersToggler.addEventListener('change', () => {
  numbersToggler.checked ? showNumbersReplacer() : hideNumbersReplacer();
})

export function copyNewQueryToClipboard(letter) {
  const query = queryInput.value;
  const number = numbersToggler.checked ? document.getElementById('desired_number').value : getDefaultNumber(query);
  const newValue = letter + number;

  navigator.clipboard.writeText(getNewQuery(query, newValue))
}
