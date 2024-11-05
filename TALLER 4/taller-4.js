"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
console.log("ASYNC");
/* Cree una función que reciba como argumento un número y retorne el cuadrado de éste cómo una
promesa usando Async para ello. Luego, llame a la función y trate de imprimir su valor de retorno. ¿Cuál
es el resultado de la impresión? ¿un valor numérico ? ¿una promesa? */
// Al utilizar Async, sin utilizar Await, se devolverá una promesa, teniendo en cuenta que siempre se va a resolver con el valor que se le asigne.
// Al utilizar Async y utilizar Await, se devolverá el valor, es decir, un valor numérico.
function cuadradoSin(numero) {
    return __awaiter(this, void 0, void 0, function* () {
        return numero * numero;
    });
}
cuadradoSin(10).then(console.log);
function cuadradoCon(numero) {
    return new Promise(resolve => {
        resolve(numero * numero);
    });
}
;
let resultadoCon = () => __awaiter(void 0, void 0, void 0, function* () {
    let promesa = yield cuadradoCon(20);
    console.log(promesa);
});
resultadoCon();
function cuadradoConDos(numero) {
    return __awaiter(this, void 0, void 0, function* () {
        let promesa = new Promise(resolve => {
            resolve(numero * numero);
        });
        let valor = yield promesa;
        console.log(valor);
    });
}
;
cuadradoConDos(20);
/* Cree una función llamada “resultado” que retorne una promesa usando “return new Promise”, de tal
manera que la promesa en su bloque de instrucciones implemente setTimeout demorandose seis
segundos para resolverse con valor 8. Luego, llame a la función e imprima su resultado, ¿qué resultado
obtiene? ¿una promesa?, ¿ un entero ? */
// Al aparecer el resultado, se obtiene una promesa con New Promise.
function resultado() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(8);
        }, 6000);
    });
}
/* console.log(resultado()); */
resultado().then(console.log);
/* Cree una función llamada “cuadradoAsincrono” que llame en su bloque de instrucciones a la función
“resultado” de tal manera que la ejecución se detenga hasta obtener el valor retornado por “resultado”,
luego, eleve tal valor al cuadrado y este sea impreso. Use Async - Await. ¿ Qué imprimió ? ¿una
promesa?, ¿ un entero ? */
// Utilizando Async - Await, se obtiene el valor de la promesa.
function cuadradoAsincrono() {
    return __awaiter(this, void 0, void 0, function* () {
        let valor = yield resultado();
        console.log("Valor de la promesa /resultado/:", valor);
        let cuadrado = valor * valor;
        console.log("Cuadrado:", cuadrado);
    });
}
cuadradoAsincrono();
/* Responda:
a) ¿Qué cláusula usamos para que una función retorne una promesa sin crearla explícitamente
dentro de la función ?
b) Si necesitamos capturar el valor de una promesa, ¿ qué cláusula usamos ?
c) ¿Cuál es la condición para poder usar la cláusula await ? */
/* a) Async.
Al declarar la función como async, es decir, escribir la palabra async antes de la función, automaticamente
se retorna una promesa. */
/* b) Await. Al utilizar await, se captura el valor de la promesa, hasta que está se resuelva. */
/* c) Cuando se utiliza await, se debe utilizar dentro de una función que esté declarada como async. */
console.log("POO");
/* Cree e instancie una clase coche con un método no estático y otro estático, dos propiedades, una pública
y una privada, ambas deben ser pasadas al constructor. */
class Coche {
    constructor(color, marca) {
        this.color = color;
        this.marca = marca;
    }
    mostrar() {
        console.log(`Color: ${this.color}, Marca: ${this.marca}`);
    }
    static crearCoche() {
        return new Coche("Azul", "Audi");
    }
}
let miCoche = new Coche("Rojo", "Mercedes");
miCoche.mostrar();
let coche = Coche.crearCoche();
coche.mostrar();
/* Cree e instancie una clase robot con dos métodos no estáticos y dos estáticos, cuatro propiedades, dos
públicas y dos privadas, dos deben ser pasadas al constructor, las otras dos, deben ser inicializadas
dentro de la clase. */
class Robot {
    constructor(modelo, energia) {
        this.color = "Gris";
        this.velocidad = 190;
        this.modelo = modelo;
        this.energia = energia;
    }
    Información() {
        console.log(`Modelo: ${this.modelo}, Color: ${this.color}, Energía: ${this.energia}, Velocidad: ${this.velocidad}`);
    }
    Energia() {
        console.log(`Energía: ${this.energia}`);
    }
    static crearRobocopBasico() {
        return new Robot("Robocop", 100);
    }
    static crearRobocopAdulto() {
        return new Robot("Robocop", 200);
    }
}
let Robocop = new Robot("Robocop", 300);
Robocop.Información();
Robocop.Energia();
let RobocopBasico = Robot.crearRobocopBasico();
RobocopBasico.Información();
let RobocopAdulto = Robot.crearRobocopAdulto();
RobocopAdulto.Información();
/* Cree e instancie una clase PC con dos métodos no estáticos y dos estáticos, cuatro propiedades, dos
públicas y dos privadas, todas deben ser pasadas al constructor. */
class PC {
    constructor(nombre, version, precio, capacidad) {
        this.nombre = nombre;
        this.version = version;
        this.precio = precio;
        this.capacidad = capacidad;
    }
    informaciónPC() {
        console.log(`Nombre: ${this.nombre}, Versión: ${this.version}, Precio: ${this.precio}, Capacidad: ${this.capacidad}`);
    }
    precioPC() {
        console.log(`Precio: ${this.precio}`);
    }
    static crearPC() {
        return new PC("Windows 10", "64 bits", 1000, 8);
    }
    static crearPC2() {
        return new PC("Windows 11", "64 bits", 2000, 16);
    }
}
let PC1 = new PC("Windows 10", "64 bits", 1000, 8);
PC1.informaciónPC();
PC1.precioPC();
let PC2 = PC.crearPC();
PC2.informaciónPC();
PC2.precioPC();
let PC3 = PC.crearPC2();
PC3.informaciónPC();
PC3.precioPC();
