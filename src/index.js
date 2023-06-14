import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

function onKeyUp(event) {
  const inputValue = event.target.value;

  const wordsCount = analyzer.getWordCount(inputValue)
  document.querySelector('li[name="textContent"] a').innerHTML = wordsCount

  const characterCount = analyzer.getCharacterCount(inputValue)
  document.querySelector('li[name="characterCount"] a').innerHTML = characterCount
}

const box = document.querySelector('textarea[name="user-input"]');
box.addEventListener("keyup", onKeyUp)


