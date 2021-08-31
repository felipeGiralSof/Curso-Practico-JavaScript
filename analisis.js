/*function esPar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}*/
// Functions Helpers
function esPar(numero) {
  return (numero % 2 === 0);
}
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

//Calculadora de Medianas
function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const personitaMitad1 = lista[mitad - 1];
    const personitaMitad2 = lista[mitad];
    const mediana = calcularMediaAritmetica([
      personitaMitad1,
      personitaMitad2
    ]);
    return mediana;
  } else {
    const personitaMitad = lista[mitad];
    return personitaMitad;
  }
}

// Mediana General
const salariosCol = colombia.map(
  function (personita) {
    return personita.salary;
  }
);

const salariosColSorted = salariosCol.sort(
  function (salaryA, salaryB) {
    return salaryA - salaryB;
  }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//Mediana del Top 10% 

const splicestart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - splicestart;

const salarioColTop10 = salariosColSorted.splice(
  splicestart,
  spliceCount,
);

const medianaTop10Col = medianaSalarios(salarioColTop10);

console.log(
  {
    medianaGeneralCol,
    medianaTop10Col
  }
);