// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1, // key is D (propiedad) y 1 is value
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  let arr = [];

  for (let key in objeto) {
    arr.push([key, objeto[key]]);
    // arr.push({key: objeto[key]});
  }

  return arr;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  // Pista: console.log(Object.keys({a:1, b:2})) devuelve --> ['a', 'b']
  
  let obj = {};

  for (let i = 0; i < string.length; i++) {
    if (Object.keys(obj).includes(string[i])) {
      obj[string[i]] = obj[string[i]] + 1;
      continue;
    }
    obj[string[i]] = 1;
  }

  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  //Nota: si usas continue, el ese no es necesario que lo uses

  let mayus = ''; // Acumulador de mayusculas
  let minus = ''; // Acumulador de minusculas

  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i].toUpperCase()) {
      mayus += s[i];
    } else {
      minus += s[i]; // Si no es mayuscula, es minuscula y agregalo a la variable minus
    }
  }

  return `${mayus}${minus}`;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  // Opcion 1: Propia
  // ----
  let arr = str.split(' ');
  let strInvertido = [];
    
  for (let i = 0; i < arr.length; i++) { 
      arr[i] = arr[i].split(''); // Separo cada palabra en letras y las guardo en un array
      arr[i] = arr[i].reverse(); // Invierto el orden de las letras
      strInvertido.push(arr[i].join('')); // Junto las letras en una palabra, devuelve -> [ 'ehT', 'yrneH', 'egnellahC', 'si', '!esolc' ]
  }

  return strInvertido.join(' '); // Junto las palabras en un string, devuelve -> 'ehT yrneH egnellahC si !esolc'

  // Opcion 2: Instructora
  // ----
  // let strToArray = str.split(" ");
  
  // let arrayFinal = strToArray.map(function(elemento) {
  //   return elemento.split("").reverse().join("");
  // });
  
  // return arrayFinal.join(" ");
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  // 282 --> "282" --> ["2", "8", "2"] --> ["2", "8", "2"].reverse() --> ["2", "8", "2"] --> "282" == 'Es capicua'
  // 287 --> "287" --> ["2", "8", "7"] --> ["2", "8", "7"].reverse() --> ["7", "8", "2"] --> "782" == 'No es capicua'
  let numString = numero.toString();
  let numInvertido = numString.split('').reverse().join('');

  if (numString == numInvertido) {
    return 'Es capicua';
  } 

  return 'No es capicua';
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  let nuevaCadena = ''; // Si no le asigno nada, me devuelve undefined

  for (let i=0; i<cadena.length; i++) {
    if (cadena[i] == 'a' || cadena[i] == 'b' || cadena[i] == 'c') {
      continue;
    }
    nuevaCadena += cadena[i];
  }

  return nuevaCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  for (let i = 0; i < arr.length; i++) { // Cantidad de vuelta que voy a dar
    for (let j = i+1; j < arr.length; j++) { // ir comparando con el resto de los elementos
      if (arr[j].length < arr[i].length) { // si el elemento actual es menor que el siguiente
        let aux = arr[j]; // guardo el elemento menor en una variable auxiliar
        arr[j] = arr[i]; // el elemento menor pasa a ocupar la posicion del elemento mayor
        arr[i] = aux;
      }
    }
  }

  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  
  let arr = [];
  
  for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] == arreglo2[j]) {
        arr.push(arreglo1[i]); // tambien puede ser arr.push(arreglo2[j]);
      }
    }
  }

  return arr;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

