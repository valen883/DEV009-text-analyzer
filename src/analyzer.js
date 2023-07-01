const analyzer = {
  getWordCount: (text) => {
    //TODO: esta funcion debe retornar el recuento de palabras que se encuentran en  el parámetro `text` de tipo `string`.
    const getWordNumber = text.split(" ").length;
    return getWordNumber
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const characterNumber = text.length;
    return characterNumber
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    //La expresión regular [\s\W_] coincide con cualquier carácter que sea un espacio (\s), un 
    //carácter no alfanumérico (\W), o un guión bajo (_). 
    const characExcludingSpacest = text.replace(/[\s\W_]/g, "").length;
    return characExcludingSpacest
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.split(' ');
    const wordNumb = words.length;
    //.reduce suma la longitud de todas las palabras reduciendo el array a un solo valor
    const totalLength = words.reduce((acc, word) => acc + word.length, 0);
    // acc es el acumulador, word el array 
    // longitud media = suma los números, después divide por cuántos números hay.
    const averageLength = wordNumb > 0 ? totalLength / wordNumb : 0;
    // parseFloat conversion de string a float (decimal)
    //toFixed redondea el float a dos numeros desp. de la coma
    return parseFloat(averageLength.toFixed(2));
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    //.match  devuelve un array con todas las coincidencias encontradas con la expres. regul.
    // sin concidencias || OR se asigna un []
    const numbers = text.match(/\b\d+(\.\d+)?\b/g) || [];
    let count = 0;
    // forEach ejecuta la función indicada una vez por cada elemento del array  
    numbers.forEach((number) => {
      const parsedNumber = parseFloat(number);
      //! negacion de isNaN not a number
      // isFinite determina si el argumento es un numero finito (contrario a infinito)
      if (!isNaN(parsedNumber) && isFinite(parsedNumber)) {
        count++;
      }
    });
    return count;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const allWords = text.split(' ');
    let sum = 0;
    for (let i = 0; i < allWords.length; i++) {
      const currentWord = allWords[i];
      if (currentWord !== '') {
        if (!isNaN(currentWord)) {
          sum = sum + parseFloat(currentWord);
        }
      }
    }
    return sum;
  },
};

export default analyzer;

//acá debes implementar el objeto analyzer, el cual ya está exportado en el boilerplate. 
//Este objeto (analyzer) debe contener seis métodos: