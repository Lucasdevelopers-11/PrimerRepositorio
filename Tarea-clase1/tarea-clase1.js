//TAREA 1

// crear una función que tome como parámetro el año actual y el año de nacimiento
// y calcule la edad del usuario (más o menos).
// Preguntarle estos datos al usuario y guardarlos en 2 variables
// Ejecutar la función con estos datos
// Impriman el resultado en la consola

let $anioActual = prompt('Ingrese el año actual'); //Pide (prompt...) el año actual y lo guarda en la variable ($anioActual) 
let $anioNacimiento = prompt('Ingrese su año de nacimiento');//Pide (prompt...) el año nacimiento  y lo guarda en la variable ($anioNacimiento)

function calculo($anioActual, $anioNacimiento) {
    return "Su edad es " + ($anioActual - $anioNacimiento) // devuelve el resultado de la resta
}

console.log(calculo($anioActual, $anioNacimiento)); //Llama a la funcion y lo imprime por consola

//TAREA 2

// Preguntar el salario anual y calcular el salario mensual
// Preguntar el salario mensual y calcular el anual
// diario... semanal, por hora. etc.

let $salarioAnual = prompt('¿Cual es su salario anual?')
let $salarioMensual = prompt('¿Cual es su salario mensual?')
const $dias = 365;
const $salarioDia = ($salarioAnual / $dias);

function calculo1($salarioAnual) {
    return "Su salario mensual es de $" + ($salarioAnual / 12);
}


function calculo2($salarioMensual) {
    return "Su salario anual es de $" + ($salarioMensual * 12);
}

function calculo3($salarioAnual) {
    const $semanas = 52;
    return "Su salario por semanas es de $" + ($salarioAnual / $semanas);
}

function calculo4($salarioAnual) {

    return "Su salario por dias es de $" + ($salarioAnual / $dias);
}


function calculo5() {
    const $horas = 8;
    return "Su salario por hora es de $" + ($salarioDia / $horas);

}
console.log(calculo1($salarioAnual));
console.log(calculo2($salarioMensual));
console.log(calculo3($salarioAnual));
console.log(calculo4($salarioAnual));
console.log(calculo5());


