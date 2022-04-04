///
function reverserWord(sentence) {
  return sentence
    .split(' ')
    .map((word) => {
      return word.split('').reverse().join('');
    })
    .join('  ');
}

const reverse = reverserWord('alchemy rocks gold');

console.log('reverse', reverse);
