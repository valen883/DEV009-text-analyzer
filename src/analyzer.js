const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta funcion debe retornar el recuento de palabras que se encuentran en  el parámetro `text` de tipo `string`.
    const getWordNumber = text.split(" ").length;
    return getWordNumber
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    //text.split(''); cadena vacia como separador
    const characterNumber =  text.length;
    return characterNumber
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const characExcludingSpacest = text.replace(/ /g, "" );
    return characExcludingSpacest
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    return text
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    return text
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    return text
  },
};

export default analyzer;

//acá debes implementar el objeto analyzer, el cual ya está exportado en el boilerplate. 
//Este objeto (analyzer) debe contener seis métodos: