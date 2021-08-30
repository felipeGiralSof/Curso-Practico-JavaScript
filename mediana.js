//Funcion para calcular el promedio
function calcularMediaAritmetica(lista) {

  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );
  const promedio = sumaLista / lista.length;
  return promedio;
}

/*const lista1 = [
  100,
  300,
  600,
  9000000
];*/

//funcion para calcular si un numero es par o impar
function esPar(numerito) {
  if (numerito % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// funcion para calcular la mediana
function calcularMediana(lista1) {
  //const lista1 = this.lista;
  lista1.sort(function (a, b) { return a - b });
  console.log(lista1);
  let mitadLista = parseInt(lista1.length / 2);

  let mediana;

  if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista - 1];
    const elemento2 = lista1[mitadLista];
    const promedioElemento1y2 = calcularMediaAritmetica([
      elemento1,
      elemento2
    ]);
    console.log("hola mundo");
    mediana = promedioElemento1y2;
  } else {
    mediana = lista1[mitadLista];
  }
  return mediana;
}






