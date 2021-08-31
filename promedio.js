/*const lista1 = [
  100,
  200,
  300,
  500
];*/
let listaUsario = [];

function datosUsuario() {
  let valorNumeroDatos = numeroDatos();

  //trae los datos a js y los agrega a la
  for (let i = 1; i < (valorNumeroDatos + 1); i++) {
    let id = i;
    let dato = inputDatoUsiario = document.getElementById(id);
    let valueDato = parseInt(dato.value);

    let aggElemento = listaUsario.push(valueDato);
  }
}

function calcularMediaAritmetica(lista) {
  let sumaLista = 0;
  for (let i = 0; i < lista.length; i++) {
    sumaLista = sumaLista + lista[i];
  }
  /*const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );*/
  const promedio = sumaLista / lista.length;
  return promedio;
}

function numeroDatos() {
  //saber cuantos inputs son:
  const NoPromedios = parseInt(document.getElementById("CantidadValores").value);
  return NoPromedios;
}

function generarInputs() {
  //eliminar todos los elementos hijos del padre;
  var elemento = document.getElementById("aggInputs");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  };
  //quitar respuesta
  const resultado = document.getElementById("resultado");
  resultado.innerText = "";

  //colocar los imput
  let valorNumeroDatos = numeroDatos();

  for (let i = 1; i < (valorNumeroDatos + 1); i++) {

    var direccion = '<label for="' + i + '">dato: </label> <input id="' + i + '"type="number"></input>';
    let input1 = document.getElementById("aggInputs");
    input1.insertAdjacentHTML('beforeend', direccion);
  }
  var buto = '<button type = "button" onclick = "calcularMediaAritmetica()">Calcular</button>';
  let button = document.getElementById("aggInputs");
  button.insertAdjacentHTML('beforeend', buto);
}