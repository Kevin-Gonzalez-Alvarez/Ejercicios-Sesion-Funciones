// Ejercicios

/*

Realizar una función que realice o saatisfaga los siguientes escenarios

Realizar en manera de función general y funcion flecha.

1. Calcular el cuadrado de un número.

2. Escribir un código que convierta de grados celsius
a grados farenheit

3. Realizar una función que calcule el valor de
Voltaje, recibiendo como entradas o parámetros
Resistencia y Corriente.

4. Elaborar una función que calcule el volumen de
un cubo, recibiendo como dato de entrada Lado.

5. Calcular el área de un triángulo

6. Calcular el volumen de una esfera

7. Convertir una cadena de texto a mayúsculas, usando el método .toUpperCase()

*/


// 1. Calcular el cuadrado de un número.

// Función general
function calcularCuadrado(numero) {
    return numero * numero;
}
  
// Función flecha
const calcularCuadradoFlecha = numero => numero * numero;


// 2. Escribir un código que convierta de grados celsius a grados farenheit

// Función general
function convertirAFarenheit(celsius) {
    return (celsius * 9/5) + 32;
}
  
// Función flecha
const convertirAFarenheitFlecha = celsius => (celsius * 9/5) + 32;


// 3. Realizar una función que calcule el valor de Voltaje, recibiendo como entradas o parámetros Resistencia y Corriente.

// Función general
function calcularVoltaje(resistencia, corriente) {
    return resistencia * corriente;
}
  
// Función flecha
const calcularVoltajeFlecha = (resistencia, corriente) => resistencia * corriente;


// 4. Elaborar una función que calcule el volumen de un cubo, recibiendo como dato de entrada Lado.

// Función general
function calcularVolumenCubo(lado) {
    return lado * lado * lado;
}
  
// Función flecha
const calcularVolumenCuboFlecha = lado => lado * lado * lado;


// 5. Calcular el área de un triángulo

// Función general
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}
  
// Función flecha
const calcularAreaTrianguloFlecha = (base, altura) => (base * altura) / 2;


// 6. Calcular el volumen de una esfera

// Función general
function calcularVolumenEsfera(radio) {
    return (4/3) * Math.PI * Math.pow(radio, 3);
}
  
// Función flecha
const calcularVolumenEsferaFlecha = radio => (4/3) * Math.PI * Math.pow(radio, 3);
  

// 7. Convertir una cadena de texto a mayúsculas, usando el método .toUpperCase() 

// Función general
function convertirAMayusculas(texto) {
    return texto.toUpperCase();
}
  
// Función flecha
const convertirAMayusculasFlechas = texto => texto.toUpperCase();


console.log("El cuadrado es de: " + calcularCuadrado(25));
console.log("Los grados Farenheit son de: " + convertirAFarenheit(28));
console.log("El voltaje calculado es de: " + calcularVoltaje(2,11));
console.log("El volumen del cubo es de: " + calcularVolumenCubo(8));
console.log("El area del triangulo es de: " + calcularAreaTriangulo(3,7));
console.log("El volumen de la esfera es de: " + calcularVolumenEsfera(5));
console.log("El texto en Mayusculas es " + convertirAMayusculas("ch28"));


  