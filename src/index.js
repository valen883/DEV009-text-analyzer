import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

// funcion para tomar el valor recibido en textarea para ser utlizado por el evento
function onKeyUp(event) {
  //.target hace referencia al objeto en el cual se lanzo el evento
  //.value devuelve el valor del objeto
  const inputValue = event.target.value;

  const wordsCount = analyzer.getWordCount(inputValue)
  document.querySelector('li[name="wordsCount"] a').innerHTML = wordsCount;

  const characterCount = analyzer.getCharacterCount(inputValue)
  document.querySelector('li[name="characterCount"] a').innerHTML = characterCount;

  const  characterWtSpaces = analyzer.getCharacterCountExcludingSpaces(inputValue)
  document.querySelector('li[name="characterWtSpaces"] a').innerHTML = characterWtSpaces

  const numbersCount = analyzer.getNumberCount(inputValue)
  document.querySelector('li[name="numbersCount"] a').innerHTML = numbersCount

  const Sum = analyzer.getNumberSum(inputValue)
  document.querySelector('li[name="sum"] a').innerHTML = Sum

  const wordLength = analyzer.getAverageWordLength(inputValue)
  document.querySelector('li[name="wordLength"] a').innerHTML = wordLength
  
}
// aqui escucha el evemto keyuo por medio del metodo addEventLinstener del primer elemento indicado 
//por querySelector y la funcion que le indica que debe hacer
const box = document.querySelector('textarea[name="user-input"]');
box.addEventListener("keyup", onKeyUp)


