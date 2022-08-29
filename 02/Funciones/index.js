const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const lista2 = [];

function mostrarLista(array) {
  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  } else {
    console.log("lista vacia");
  }
}
mostrarLista(lista);
mostrarLista(lista2);

(function (array) {
  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  } else {
    console.log("lista vacia");
  }
})([2, 22, 222]);

function crearMultiplicador(numero) {
  return function (numero2) {
    return numero * numero2;
  };
}

const duplicar = (numero) => {
  return crearMultiplicador(numero)(2);
};
const triplicar = (numero) => {
  return crearMultiplicador(numero)(3);
};
console.log(duplicar(5));
console.log(triplicar(5));