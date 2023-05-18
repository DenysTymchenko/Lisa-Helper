export function getNewQuery(query, newValue) {
  const newQuery = query.replaceAll(getOldValue(query), newValue);
  return newQuery;
}

function getOldValue(query) {
  query.split('');
  const oldLetter = query[query.indexOf('!') + 1];
  return oldLetter + getDefaultNumber(query);
}

export function getDefaultNumber(query) {
  let defaultNumber = '';

  query.split('');
  for (let i = query.indexOf(')') - 2; i >= 0; i--) {
    if (!isNaN(query[i])) {
      defaultNumber += query[i];
    } else {
      break;
    }
  };

  return defaultNumber.split('').reverse().join('');
}
