// Sesión de funciones

/* 
Hoisting:

Es fundamental en el entendimiento de la forma en la que se ejecuta nuestro codigo de JS. Esto aplica tanto para variables como para funciones.

Como tal, la traduccion de Hoisting es elevacion, a partir de aqui, su entendimiento es mucho mas intuitivo, lo que hace a grande rasgos es "elevar" las funciones y variables declaradas dentro del codido.

Yo puedo invocar una funcion antes de siquiera declararla.

JS, cuando es ejecutado por el motor JS del navegador primero lee e interpreta las variables y las funciones delcaradas.


*/
/*
Scope

El concepto scope ahce refencia al alcance que tiene una variable dentro de un codigo jS.

Var, let y const.

var: global- quiere decir que se puede utilizar para trabajar con esta variable dentro de cualquier parte del codigo.

let: porque ademas de funcionar de manera global en caso de ser requerida, tambien puede ser utilizada de manera local.

const: Se refiere, por su nombre tan intuitivo, a la palabra constante, esto quiere decir que su valor no puede ser reasignado.

El uso de la palabra reservada "var" no estan recomandada por el comportamiento y la poco adaptabilidad de una variable.

Entonces, se implementan let y const como una alternativa mucho mas efeciente para determinar el Scorpe o alcance que tiene una variable. 
*/ 

// Funciones, invocacion y declaracion.


// Declaracion de una funcion

/*
palabra reservada - function
nombre de la funcion - nombreFuncion
establecer parametros - recibe de 0 a n parametros y se encasillan dentro un parentesis ()

establecer el bloque de codigo sobre el que vamos a trabajar, lo hacemos mediante llaves {
    codigo a ejecutar
}

*/

/*
Ejemplo de funcion pero no retorna ningun valor 
no recibe ningun parametro */
nuevaFuncion();

function nuevaFuncion(){
    console.log("Buenos Días CH28");
}

/*
Ejemplo de funcion que si retorna un valor
tambien recibe un parametro */

console.log (holaMundo("Kevin"));

function holaMundo(nombre){
    return "Hola " + nombre; // Si retorna un valor
}

/*

Elaborar una funcion que calcule la velocidad de un objeto

velocidad = distancia / tiempo

-function

-calcularVelociadad

(ditancia, tiempo)

- elaborar el bloque de código

*/

function calcularVelocidad(distancia, tiempo){
    return "La velocidad es de: " +  distancia / tiempo + " m/s"
    // let velocidad = distancia / tiempo;
    // return "La velocidad calculada es de: " + velocidad + " m/s";
    
}

console.log(calcularVelocidad(654, 11));


// Funciones dentro de JS

/*

Funciones flecha | Funciones Fat arrow | Funciones lambda |

Funciones anonimas
Funciones callBack - Que reciben otras funciones como parametros

Promesas

Funciones async - await
 */

// Funciones flecha

/*
Son una manera mas compacta y sencilla de escribir una funcion normal

No son lo mismo que una funcion general, se utiliza en otro tipo de contextos 
Funciones CallBack que requieren funciones anonimas

Su uso es limitado.

Declaracion de una funcion flecha

- var, let, const.
const - buena practica utilizar let para declarar funciones flecha o lambda

- nombreFuncion

- Parametros

- Establecer el bloque de codigo o procesos que va a ejecutar esta funcion

=> Fat arrow

Invocacion de una funcion flecha

nombreFuncionFlecha();
*/

// Funcion general
function funcionNormal (parametro){
    return "Hola " + parametro; 
}

// Funcion flecha - arrow function
const funcionFlecha = parametro => "Hola " + parametro;

//funciones flecha con mas parametros

const funcionVariosParametros = (datoA, datoB) =>{
    let datoC = datoA + datoB;
    return "La suma de datoA + datoB =" + datoC;
}

//Funciones flecha sin recibir un parametro

const funcionSinParametros = () =>{
    return "Hola, esta es una función que no recibe parametros";
}

///////////////////////////////////////////////////////////

// Funcion flecha para calcular la velocidad

const funcionVelocidad = (distancia, tiempo) =>{
    console.log("distancia ="+ distancia + " metros");
    console.log("Tiempo =" + tiempo + " segundos");
    return "La velociad calculada es de; " + distancia / tiempo + " m/s";
}


