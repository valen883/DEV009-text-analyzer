import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
//acá debes escuchar eventos del DOM, invocar los métodos del objeto analyzer según 
//sea necesario y actualizar el resultado en la UI (interfaz de usuario).

function onKeyUp(event) {
  const inputValue = event.target.value;

  const wordsCount = analyzer.getWordCount(inputValue)
  document.querySelector('li[name="wordsCount"] a').innerHTML = wordsCount
}

const box = document.querySelector('textarea[name="user-input"]');
box.addEventListener("keyup", onKeyUp)


