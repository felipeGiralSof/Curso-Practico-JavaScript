//Codigo del Cuadrado 
console.group("Cuadrados");

//Lados del cuadrado
//const ladoCuadrado = 5;
//console.log("el lado del cuadrado miden: " + ladoCuadrado + " cm");

//Perimetro_Cuadrado
function perimetroCuadrado(lado) {
  return lado * 4;
}
//console.log("el perimetro del cuadrado es: " + perimetroCuadrado + " cm");

//Area_Cuadrado
function areaCuadrado(lado) {
  return lado * lado;
}
//console.log("el area del cuadro es: " + ladoCuadrado * ladoCuadrado + " cm^2");

console.groupEnd();

//Codigo del Triangulo
console.group("Triangulos");

//Base y lados del Triangulo
/*const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log("los lados de mi triangulo miden: "
  + ladoTriangulo1 + "cm "
  + ladoTriangulo2 + "cm "
  + baseTriangulo + "cm"
);

//Altura_Triangulo
const alturaTriangulo = 5.5;
console.log("la altura del triangulo es: " + alturaTriangulo + " cm");*/

//Perimetro_Triangulo
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
//console.log("el perimetro del triangulo es: " + perimetroTriangulo + " cm");

//Area_Triangulo
function areaTriangulo(baseTriangulo, alturaTriangulo) {
  return (baseTriangulo * alturaTriangulo) / 2;
}
//console.log("el area del triangulo es: " + areaTriangulo + " cm^2");

//Altura_Triangulo
function alturaTriangulo(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {

  if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
    console.error("no es un triangulo isosceles");
  } else {

    const trianguloPequeñoLadoB = trianguloGrandeLadoBase / 2;
    const trianguloPequeñoLadoBase = trianguloGrandeLadoA;

    const trianguloPequeñoLadoBCuadrado = trianguloPequeñoLadoB * trianguloPequeñoLadoB;
    const trianguloPequeñoLadoBaseCuadrado = trianguloPequeñoLadoBase * trianguloPequeñoLadoBase;

    const trianguloPequeñoLadoA =
      Math.sqrt(trianguloPequeñoLadoBaseCuadrado - trianguloPequeñoLadoBCuadrado);

    const trianguloGrandeAltura = trianguloPequeñoLadoA;
    return trianguloGrandeAltura;
  }
}

console.groupEnd();

//Codigo del Circulo
console.group("Circulos");

//Radio_Circulo
//const radioCirculo = 4;
//console.log("el radio del circulo es: " + radioCirculo + " cm");

//Diametro_Circulo
function diametroCirculo(radioCirculo) {
  return radioCirculo * 2;
}
//console.log("el diametro del circulo es: " + diametroCirculo + " cm");

//PI
//const PI = 3.1415;
const PI = Math.PI;
console.log("el PI del circulos es: " + PI);

//Perimetro_Circulo O Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
//console.log("el perimetro del circulo es: " + perimetroCirculo + " cm");

//Area_Circulo
function areaCirculo(radio) {
  return (radio * radio) * PI;
}
//console.log("el area del circulo es: " + areaCirculo + " cm^2");  

console.groupEnd();

//Aqui interactuamos con el HTML

function calcularPerimetroCuadrado() {
  const valorInput = document.getElementById("InputCuadrado").value;
  const perimetro = perimetroCuadrado(valorInput);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const valorInput = document.getElementById("InputCuadrado").value;
  const area = areaCuadrado(valorInput);
  alert(area);
}
function calcularPerimetroTriangulo() {
  const lado1 = parseInt(document.getElementById("InputLado1").value);
  const lado2 = parseInt(document.getElementById("InputLado2").value);
  const base = parseInt(document.getElementById("InputBase").value);
  const perimetro = perimetroTriangulo(lado1, lado2, base);
  alert(perimetro);
}
function calcularAreaTriangulo() {
  const base = document.getElementById("InputBases").value;
  const altura = document.getElementById("InputAltura").value;
  const area = areaTriangulo(base, altura);
  alert(area);
}
function calcularAlturaTriangulo() {
  const lado1 = parseInt(document.getElementById("InputLadoA").value);
  const lado2 = parseInt(document.getElementById("InputLadoB").value);
  const base = parseInt(document.getElementById("InputBaseC").value);
  const altura = alturaTriangulo(lado1, lado2, base);
  alert(altura);
}
function calcularPerimetroCirculo() {
  const radio = document.getElementById("InputRadio").value;
  const perimetro = perimetroCirculo(radio);
  alert(perimetro);
}
function calcularAreaCirculo() {
  const radio = document.getElementById("InputRadio").value;
  const area = areaCirculo(radio);
  alert(area);
}

