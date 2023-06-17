import analyzer from './analyzer.js';
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const box = document.querySelector('textarea[name="user-input"]');
box.addEventListener("keyup", function () {
  //.value devuelve el valor del objeto
  const text = box.value;
  const charactersCount = analyzer.getCharacterCount(text);
  document.getElementById("characterCount").innerHTML = charactersCount;
  const charactsExcludingSpace = analyzer.getCharacterCountExcludingSpaces(text);
  document.getElementById('characterWtSpaces').innerHTML = charactsExcludingSpace;
  const wordsNumber = analyzer.getWordCount(text);
  document.getElementById('wordsCount').innerHTML = wordsNumber;
  const number = analyzer.getNumberCount(text);
  document.getElementById('numbersCount').innerHTML = number;
  const numberSum = analyzer.getNumberSum(text)
  document.getElementById('sum').innerHTML = numberSum
  const wordsLength = analyzer.getAverageWordLength(text)
  document.getElementById('wordLength').innerHTML = wordsLength
})