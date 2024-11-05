"use strict";
console.log("FUNCIONES - TALLER 2");
/*  Cree una función con un paraḿetro opcional tipo boolean, uno por defecto tipo string, y uno obligatorio de
 tipo number. Haga el llamado a la función. */
// Los parámetros por defecto y opcionales, tienen que ir después del obligatorio
function funcion1(obligatorio, opcional, porDefecto = "Mi nombre es Lenis") {
    console.log("Booleano: ", opcional, "\nOpcional: ", porDefecto, "\nObligatorio: ", obligatorio);
}
funcion1(123, false);
/* Cree una variable tipo función que tenga como parámetros dos números y retorne su suma, haga el
llamado a la función. */
function suma(a, b) {
    return a + b;
}
console.log("Suma: ", suma(2, 4));
/* Use setTimeOut para implementar un callback que se llame a los 5 segundos e imprima por consola el
mensaje “HOLA ADSI” */
let callback = setTimeout(function time() {
    console.log("HOLA ADSI");
}, 5000);
/* Cree una función flecha sin argumentos que imprima “Hola ADSI”. */
let flechaSin = () => console.log("HOLA ADSI");
flechaSin();
/* Cree una función flecha que tenga como parámetro edad y retorne un string que le diga al usuario cuál
fue la edad pasada como argumento, imprima el valor devuelto por la función. Use paréntesis para el
parámetro y omita la palabra reservada return. */
let flechaCon = (edad) => {
    return `La edad pasada como argumento es ${edad}`;
};
console.log(flechaCon(45));
/* Cree una función flecha que tenga como parámetros dos números y retorne el producto de éstos,
imprima el valor devuelto por la función. Use paréntesis para agrupar los parámetros, no use la palabra
reservada return. */
let flechaCon2 = (a, b) => a * b;
console.log(flechaCon2(3, 10));
/* Cree una función flecha que tenga como parámetros dos números y retorne el módulo de éstos, imprima
el valor devuelto por la función. La función debe tener dos instrucciones, una donde se declare e inicialice
la variable módulo que contendrá el módulo de los dos números y la otra donde se retorne la variable
módulo. Use paréntesis para agrupar los parámetros, use llaves para agrupar las dos instrucciones. */
let flechaMod = (a, b) => {
    const modulo = a % b;
    return modulo;
};
console.log(flechaMod(10, 3));
console.log("\nINVESTIGACIÓN-1\n.");
/*  Desestructuración de objetos y arreglos. */
// ARREGLOS
/* Asignación Básica de Variables */
// Declaración de arreglo
const des = [1, 2, 3];
// Asignación de valores del arreglo
const [rojo, amarillo, azul] = des;
// Impresión
console.log(rojo);
/* Asignación separada de la declaración */
// Declaración de arreglo 
let uno, dos;
// Asignación de valores mediante las variables, siendo desestructuración
[uno, dos] = [2, 3];
//Impresión
console.log(dos);
// OBJETOS
/* Asignación Básica de Objetos */
// Declaración de objeto
const persona = {
    nombre: "Lenis",
    edad: 17,
    país: "Colombia"
};
// Desestructuración de objetos
const { nombre, edad, país } = persona;
console.log(nombre);
