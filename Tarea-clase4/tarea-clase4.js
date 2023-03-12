/*
// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.

for(let i =3 ; i<=22;i=i+3){

    console.log(i);
}

// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.
let i=10;
while (i>0){
    i--;
    console.log(i);
}
// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.

let numero;
for (let i = 1; i <= 50; i++) {
    numero = i;

    let resto1 = numero % 3;
    let resto2 = numero % 5;

    if (resto1 === 0 && resto2 === 0) {
        console.log('FizzBuzz')
    }
    else if (resto1 === 0) {
        console.log('Fizz')
    }
    else if (resto2 === 0) {
        console.log('Buzz');
    }

    else {
        console.log(i);
    }
}




*/