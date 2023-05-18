export function renderLetters(letter) {
  const lettersDiv = document.querySelector('.work-panel__letters-wrapper');
  
  const letterP = document.createElement('p');
  letterP.classList.add('work-panel__letter');
  letterP.innerText = letter;

  lettersDiv.append(letterP);
}

export function showNumbersReplacer() {
  const numbersReplacer = document.querySelector('.work-panel__numbers-replacer');
  numbersReplacer.classList.remove('d-none');
}

export function hideNumbersReplacer() {
  const numbersReplacer = document.querySelector('.work-panel__numbers-replacer');
  numbersReplacer.classList.add('d-none');
}
