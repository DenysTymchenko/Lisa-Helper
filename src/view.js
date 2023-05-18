export function showNumbersReplacer() {
  const numbersReplacer = document.querySelector('.work-panel__numbers-replacer');
  numbersReplacer.classList.remove('d-none');
}

export function hideNumbersReplacer() {
  const numbersReplacer = document.querySelector('.work-panel__numbers-replacer');
  numbersReplacer.classList.add('d-none');
}
