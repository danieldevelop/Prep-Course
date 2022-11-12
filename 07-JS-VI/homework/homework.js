// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código: 
  // Este ejercicio puede funcionar sin un ciclo for
  
  // Opcion 1:
  // ---
  return nombre[0].toUpperCase() + nombre.substring(1);
  
  // Opcion 2:
  // ---
  // nombre = nombre[0].toUpperCase()+nombre.slice(1);
  // return nombre;
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  cb(n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:

  // Opcion 1:
  // ----
  let suma = 0;

  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  
  // Opcion 2:
  // ----
  // 1er argumento -> acumulador, valor que retornamos en la iteracion anterior
  // 2do argumento -> elemento, valor de elemento de la iteracion actual
  // 3er argumento -> indice (opcional), indice del elemento de la iteracion actual
  // suma = numeros.reduce(function(acumulador, elemento) {
  //   return acumulador + elemento;
  // }, 0); // Valor inicial del acumulador
  
  cb(suma);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  
  // Opcion 1:
  // ----
  // for (let i=0; i<array.length; i++) {
  //   cb(array[i]);
  // }

  // Opcion 2:
  // ----
  array.forEach(function(elemento) {
    cb(elemento);
  });
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  const arr = [];
  
  // Opcion 1:
  // ----
  for (let i=0; i<array.length; i++) {
    arr.push(cb(array[i]));
  }

  // Opcion 2:
  // ----
  // array.forEach((elemento) => { arr.push(cb(elemento)); });
  
  // Opcion 3:
  // ----
  // array.map((elemento) => { arr.push(cb(elemento)); }); 
  
  return arr;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  let filterArray = []; // recomendable usar let no const

  // Opcion 1:
  // ----
  for (let i=0; i<array.length; i++) {
    if (array[i].charAt(0) == 'a') {
      filterArray.push(array[i]);
    }
  }

  // Opcion 2:
  // ----
  // filterArray = array.filter((elemento) => { 
  //   return elemento[0] == 'a';
  // });

  return filterArray;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
