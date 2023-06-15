import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//.target hace referencia al objeto en el cual se lanzo el evento
//.value devuelve el valor del objeto
// funcion para tomar el valor recibido en textarea 
function onKeyUp(event) {
  const inputValue = event.target.value;

  const wordsCount = analyzer.getWordCount(inputValue)
  document.querySelector('li[name="wordsCount"] a').innerHTML = wordsCount;

  const characterCount = analyzer.getCharacterCount(inputValue)
  document.querySelector('li[name="characterCount"] a').innerHTML = characterCount;

  const  characterWtSpaces = analyzer.getCharacterCountExcludingSpaces(inputValue)
  document.querySelector('li[name="characterWtSpaces"] a').innerHTML = characterWtSpaces
  
}

const box = document.querySelector('textarea[name="user-input"]');
box.addEventListener("keyup", onKeyUp)


