"use strict";
/* Cree y ejecute una promesa que siempre se resuelva, y que lo haga con un string “Somos
programadores, hacemos mover el mundo”, de tal manera que en su .then, se imprima tal string mediante
console.log */
// Creación de la promesa
let promesa1 = new Promise((resolve) => {
    resolve("Somos programadores, hacemos mover el mundo.");
});
// Ejecución de la promesa
promesa1.then((res) => {
    console.log("Promesa que siempre resuelve: ", res);
});
/* Cree y ejecute una promesa que siempre se rechace, y que lo haga con un string “Ha ocurrido un error
desconocido.”, de tal manera que en su .catch, se imprima tal string mediante console.log */
let promesa2 = new Promise((reject) => {
    reject("Ha ocurrido un error desconocido.");
});
promesa2.catch((err) => {
    console.log("Promesa que siempre se rechace: ", err);
});
/* La entrega de subsidios en una institución pública depende de si el estrato de la persona es menor o igual
a 2. Cree un programa que implemente una variable que guarde el estrato del usuario, y mediante la
evaluación de tal variable, muestre si el usuario tiene derecho o no a un subsidio usando promesas, de tal
manera que si la variable contiene un valor numérico entre 1 y 6, la promesa se resuelva con un string
que indique si el usuario tiene o no derecho al subsidio, tal string deberá ser imprimido en el .then de la
promesa con console.log. En caso de que la variable contenga un valor nó válido la promesa se debe
rechazar lanzando el siguiente error: new Error("Estrato no válido"), tal error debe ser mostrado en
el .catch de la promesa de la siguiente manera: console.log('Ha ocurrido un error: ', err.message),
tenga en cuenta que err, es la información del error(motivo de rechazo) que se pasa desde el
reject al catch como parámetro de nombre err */
// Se ingresa el estrato
let estrato = 2;
// Se crea la promesa donde se resulve si tiene derecho o no al subsidio, al igual si el estrato sobrepasa del 6
let promesa3 = new Promise((resolve, reject) => {
    if (estrato >= 1 && estrato <= 6) {
        if (estrato <= 2) {
            resolve("El usuario tiene derecho al subsidio.");
        }
        else {
            ("El usuario no tiene derecho al subsidio.");
        }
    }
    else {
        reject(new Error("Estrato no válido."));
    }
});
// Los errores anteriormente escritos, se muestran con un console.log siendo resueltos o rechazados
promesa3.then((mensaje) => {
    console.log(mensaje);
})
    .catch((err) => {
    console.log("Ha ocurrido un error: ", err.message);
});
/* Cree una promesa que implemente 4 métodos .then en cadena de tal manera que la promesa se
resuelva inicialmente con el valor 2 <resolve(2)> y los siguientes métodos .then eleven al
cuadrado el valor pasado, imprimiendo al final el mensaje “el valor final es: X” donde x es el
resultado final del encadenamiento */
let promesa4 = new Promise((resolve) => {
    resolve(2);
});
promesa4
    .then((val) => {
    return val ** 2;
})
    .then((val) => {
    return val ** 2;
})
    .then((val) => {
    return val ** 2;
})
    .then((val) => {
    console.log("El valor final es: ", val);
});
/* Cree tres promesas promesa1, promesa2 y promesa3, de tal manera que la promesa1 siempre
se resuelva con la cadena “Somos ADSI”, que la promesa2 tenga dos opciones, resolverse o
rechazarse; de tal forma que si se resuelva lo haga con la cadena “ Somos programadores” ,
pero si se rechaza lo haga lanzando un error “Promesa 2 no cumplida” (use una variable y un
condicional doble para controlar la resolución o rechazo de la promesa, p.e. una variable estado,
velocidad, edad etc). Por último, la promesa3 siempre se debe resolver con la cadena “,
Hacemos mover el mundo”. Encadene las promesas de tal manera que cuando la promesa1 se
cumpla, imprima desde su .then el mensaje con el que se resolvió y retorne la promesa2 y
cuando ésta última se cumpla, imprima desde su .then el mensaje con el que se resolvió y
retorne la promesa3, y cuando la promesa 3 se cumpla imprima desde su .then el mensaje con
el que se resolvió. Implemente .catch para manejar el error que puede ocurrir en la promesa2, en
caso de que ocurra el rechazo, imprima el mensaje del error mediante err.message.*/
let promesa11 = new Promise((resolve) => {
    resolve("Somos ADSO");
});
// Al hacer true se cumple con la promesa21 mediante el if o si es false, no se cumpliria con la promesa
let velocidad = true;
let promesa21 = new Promise((resolve, reject) => {
    if (velocidad) {
        resolve("Somos programadores.");
    }
    else {
        reject(new Error("Promesa 2 no cumplida"));
    }
});
let promesa31 = new Promise((resolve) => {
    resolve("Hacemos mover el mundo");
});
promesa11
    .then((mensaje1) => {
    console.log(mensaje1);
    return promesa21;
})
    .then((mensaje2) => {
    console.log(mensaje2);
    return promesa31;
})
    .then((mensaje3) => {
    console.log(mensaje3);
})
    .catch((err) => {
    console.log("Ha ocurrido un error: ", err.message);
});
/* Cree una promesa cuyo resolve y reject dependan cada uno de una llamada asíncrona usando
setTimeout y así, su rechazo o resolución dependerá del proceso asíncrono que termine
primero. Implemente métodos .then y .catch. Si la promesa se rechaza, lance el error con new
Error(‘info error’) en el reject e imprima el stack del error en .catch, si se cumple, resuelva la
promesa con la cadena “promesa resuelta” e imprímalo en el .then */
let promesa5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promesa resuelta");
    }, 2000);
    setTimeout(() => {
        reject(new Error("Info error"));
    }, 1000);
});
promesa5.then((mensaje) => {
    console.log(mensaje);
})
    .catch((err) => {
    console.log("Ha ocurrido un error: ", err.message);
});
/* Cree cuatro promesas donde cada una para resolverse dependa de un setTimeout, de tal
manera que cada promesa se resuelva en tiempos diferentes. Ejecute las cuatro promesas de
forma paralela, e imprima los cuatro resultados de resolución(recuerde que estos resultados van
en un arreglo, se sugiere use .foreach). No olvide .catch, qué pasa si una de las promesas falla al
estar las cuatro en paralelo ?. Haga una implementación de Promise.race con dos de las
promesas anteriores. */
let promesa6 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Resultado de promesa 1");
    }, 4000);
});
let promesa7 = new Promise((reject) => {
    setTimeout(() => {
        reject(new Error("Error en promesa 2"));
    }, 1000);
});
let promesa8 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Resultado de promesa 3");
    }, 2000);
});
let promesa9 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Resultado de promesa 4");
    }, 3000);
});
// Se utiliza Promice.all para ejecutar varias promesas.
Promise.all([promesa6, promesa7, promesa8, promesa9])
    .then((resultado) => {
    resultado.forEach((resultado) => {
        console.log(resultado);
    });
})
    .catch((err) => {
    console.log("Ha ocurrido un error en promise.all: ", err.message);
});
// Se utilzia Promice.race retorna la promesa que sea más rápida
Promise.race([promesa7, promesa9])
    .then((resultado) => {
    console.log("Más rápida: ", resultado);
})
    .catch((err) => {
    console.log("Error: ", err.message);
});
// Si una promesa de las 4 falla, las demás siguen con el transcurso sin afectar a las demás, mostrando el error de ella misma.
