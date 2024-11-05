/* ¿Cuál es la diferencia entre usar var y usar let y const en es6 ? Se le sugiere haga una
búsqueda que involucre el término scope (alcance o ámbito de una variable) Implemente un ejemplo
práctico. */
console.log("\nINVESTIGACIÓN-1\n.");

/* VAR: Tiene alcance dentro de una función, pero si se encuentra en un ciclo
se tomará el valor del ciclo */
function ejVar() {
    var x = 10;
    if (true) {
        var x = 40;
        console.log("VAR: ", x);
    }
    console.log("VAR (modificado): ", x);
}
ejVar()

/* LET: Tiene alcance de bloque */
function ejLet() {
    let y = 20;
    if (true) {
        let y = 40;
        console.log("LET: ", y);
    }
    console.log("LET: ", y);
}
ejLet()

/* CONST: Tiene alcance de bloque, la diferencia de const con let, es que en este caso
no se puede cambiar la cantidad que se asigno a la variable original */
function ejConst() {
    const z = 345;
    if (true) {
        const z = 999;
        console.log("CONST: ", z);
    }
    console.log("CONST: ", z);
}
ejConst()

// EJERCICIO PRIMERA PARTE
console.log("\nPRIMERA PARTE\n.");

// Dos variables lógicas (booleana):
function booleana() {
    const verdadero: boolean = false;
    const falso: boolean = true;
    console.log("Variables lógicas | ", "Verdadero: ", verdadero, " | Falso: ", falso);
}
booleana()

//  Dos variables numéricas:
function number() {
    let entero: number = 12;
    let decimal: number = 22.5;
    console.log("Variables numéricas | ", "Entero: ", entero, " | Decimal: ", decimal);
}
number()

// Dos variables any (cualquier tipo de dato):
function any() {
    let cualquierDato: any = 1011098899;
    console.log("Variables any | ", cualquierDato);
}
any()

// Dos variables string (cadena de texto):
function string() {
    let cadenaTexto: string = "Analisis y Desarrollo de Software"
    console.log("String | ", cadenaTexto);
}
string()

// Creeunaplantilla de strings para mostrar un mensaje de bienvenida al usuario luego de
// registrarse en nuestro sitio, por ejemplo. “Bienvenida Paula Pérez a nuestro sitio web, gracias por
// registrarte”. Este template debe usar dos variables, nombres y apellidos
function web() {
    /* let nombre = prompt("Ingrese su nombre: ");
    let apellido = prompt("Ingrese su apellido: "); */
    const nombre = "Paula";
    const apellido = "Pérez"
    console.log("Bienvenid@", nombre, apellido, "a nuestro sitio web!");
}
web()

// EJERCICIO SEGUNDA PARTE
console.log("\nSEGUNDA PARTE\n.");

// Una variable array de números que contenga cinco elementos e imprima cada uno de sus elementos.
const arregloCincoFuera = [120, 2130, 424, 212, 132];
function array() {
    const arregloCinco = [12, 230, 44, 22, 1];
    arregloCinco.forEach(elemento => {
        console.log("Number: ", elemento);
    });
}
array()

// Una variable array de strings que contenga cinco elementos e imprima cada uno de sus elementos.
const arregloFuera = ["Johan", "Mariposa", "Negro", "Azul", "Holi"];
function cadenaTexto() {
    const arreglo = ["Lenis", "Mariposa", "Blanco", "Azul", "Holi"];
    arreglo.forEach(elemento => {
        console.log("String: ", elemento);
    });
}
cadenaTexto()

// Recorra cada array creado usando for-each e imprimiendo cada uno de sus elementos 
arregloCincoFuera.forEach(elemento => {
    console.log("Number: ", elemento);
});

arregloFuera.forEach(elemento => {
    console.log("String: ", elemento);
});

/* Funciones con array */
console.log("\nINVESTIGACIÓN-2\n.");

// Eliminar elementos en un array
function eliminar() {
    let arregloEli: any = ["Lenis", 23, false];
    arregloEli.splice(1, 2);
    console.log("Eliminación: ", arregloEli);
}
eliminar()

// Agregar elementos en un array
function agregar() {
    let arregloAgre: any = ["Hola"];
    arregloAgre.push(true, 232, "Hi")
    console.log("Agregación: ", arregloAgre);
}
agregar()

// Leer elementos en un array
function leer() {
    let arregloLee: any = [12, 12, true];
    console.log("Lectura: ", arregloLee[2]);
}
leer()

// Actualizar elementos en un array
function actualizar() {
    let arregloActu: any = [23, 12, "AJAJJA"];
    arregloActu[2] = 30;
    console.log("Actualizar: ", arregloActu);
}
actualizar()

// EJERCICIO TERCERA PARTE
console.log("\nTERCERA PARTE");

// Una variable tipo objeto cuyos valores sean los días de la semana
let semana: any = { lunes: "Lunes", martes: "Martes", miercoles: "Miercoles", jueves: "Jueves", viernes: "Viernes", sabado: "Sabado", domingo: "Domingo" }

// Una variable tipo objeto cuyos valores sean los números del 0 al 9
let números: any = { cero: 0, uno: 1, dos: 2, tres: 3, cuatro: 4, cinco: 5, seis: 6, siete: 7, ocho: 8, nueve: 9 }

// Recorra cada objeto creado usando for-in e imprimiendo cada uno de sus valores
for (const llave in semana) {
    /* console.log("Llave: ", llave); //LLAVE */
    console.log("Valor: ", semana[llave]); //VALOR
}

for (const llave in números) {
    /* console.log("LLave: ", llave); */
    console.log("Valor: ", números[llave]);
}

/* Funciones clave-valor */
console.log("\nINVESTIGACIÓN-3\n.");

// Eliminar elementos en clave-valor
function eliminarCV() {
    let cvEliminar: any = {uno: 1, nombre: "Lenis"};
    delete cvEliminar["uno"];
    console.log("Eliminar CV: ", cvEliminar);
}
eliminarCV()

// Leer elementos en clave-valor
function leerCV() {
    let cvLeer: any = {uno: 1, nombre: "Holi", saludo: "Hi"};
    console.log("Lectura CV: ", cvLeer.nombre);
    console.log("Lectura CV-2: ", cvLeer["uno"]);
    console.log("Lectura CV-3: ", cvLeer[0]);
}
leerCV()

// Actualizar elementos en clave-valor
function actualizarCV() {
    let cvActualizar: any = {uno: 1, nombre: "Holi", saludo: "Hi"};
    cvActualizar["nombre"] = "Lenis";
    console.log("Actualizar CV: ", cvActualizar);
}
actualizarCV()

/* Ciclos for y while en TS */
console.log("\nINVESTIGACIÓN-4\n.");

// For básico:
for (let i = 0; i < 2; i++) {
    console.log(i);
}

// For en iteración con array
let saludo: string[] = ["Hola", "Buenos dias"];
for (let i = 0; i < saludo.length; i++) {
    console.log(saludo[i]);
}

// For of en iteración con array u objeto
let nombres: string[] = ["Lenis", "Laura", "Leisy"];
for (const nombre of nombres) {
    // nombre toma cada valor del array de nombres
    console.log(nombre);
}

// While - 1
let i = 0;
while (i > 10) {
    console.log(i);
    i++;
}
