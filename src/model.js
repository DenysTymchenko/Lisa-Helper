export function getNewQuery(query, newValue) {
  const newQuery = query.replaceAll(getDefaultValue(query), newValue);
  return newQuery;
}

function getDefaultValue(query) {
  let defaultValue = '';

  query.split('');
  for (let i = query.indexOf(')') - 2; i >= 0; i--) {
    if (!isNaN(query[i])) {
      defaultValue += query[i];
    } else {
      defaultValue += query[i];
      break;
    }
  };
  
  return defaultValue.split('').reverse().join('');
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
