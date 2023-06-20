const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta funcion debe retornar el recuento de palabras que se encuentran en  el parámetro `text` de tipo `string`.
    const getWordNumber = text.split(" ").length;
    return getWordNumber
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const characterNumber =  text.length;
    return characterNumber
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    //La expresión regular [\s\W_] coincide con cualquier carácter que sea un espacio (\s), un carácter no alfanumérico (\W), o un guión bajo (_). L
    const characExcludingSpacest = text.replace(/[\s\W_]/g, "").length;
    return characExcludingSpacest
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.split(' ');
    const wordCount = words.length;
    const totalLength = words.reduce((acc, word) => acc + word.length, 0);
    const averageLength = wordCount > 0 ? totalLength / wordCount : 0;
    return parseFloat(averageLength.toFixed(2));
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const numbers = text.match(/\b\d+(\.\d+)?\b/g) || [];
    let count = 0;
    numbers.forEach((number) => {
      const parsedNumber = parseFloat(number);
      if (!isNaN(parsedNumber) && isFinite(parsedNumber)) {
        count++;
      }
    });
    return count;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const numbers = text.match(/\b\d+(\.\d+)?\b/g) || [];
    let sum = 0;
    numbers.forEach((number) => {
      const parsedNumber = parseFloat(number);
      if (!isNaN(parsedNumber) && isFinite(parsedNumber)) {
        sum += parsedNumber;
      }
    });
    return sum;
  },
};

export default analyzer;

//acá debes implementar el objeto analyzer, el cual ya está exportado en el boilerplate. 
//Este objeto (analyzer) debe contener seis métodos: