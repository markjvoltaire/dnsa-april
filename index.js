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






for (let i = 1; i < 16; i++) {
  if(i % 15 === 0) {
      console.log('fizzbuzz')
  } 
  else if (i % 3 === 0) {
    console.log('Fizz')
  } 
  else if (i % 5 === 0) {
    console.log('buzz')
  } 
  else {
    console.log(i)
  }
}