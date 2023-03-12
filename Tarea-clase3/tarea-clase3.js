
// TAREA1 clase-3

// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!


let usuarioNombre = (prompt('Ingrese su nombre' || '')).toLowerCase();
let nombreAmigo = 'sebastian';

if (usuarioNombre == 'Lucas' || usuarioNombre == 'lucas') {
    console.log(`Hola, Tocayo! Yo también me llamo ${usuarioNombre}`)
} else if (usuarioNombre == 'Sebastian' || usuarioNombre == 'sebastian') {
    console.log(`Hola ${usuarioNombre}, te llamas igual que mi amigo!`)
} else {
    console.log(`Hola ${usuarioNombre}!`)
}

//TAREA 2

// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

let edadUsuario = Number(prompt('Ingresa tu edad' || '')).toLowerCase();
let nuestraEdad = 18;

if (edadUsuario < 18) {
    console.log('Sos mas chico de edad que YO!');
} else if (edadUsuario > 18) {
    console.log('WOW! eres mas grande que YO!');
} else if (edadUsuario.trim().length === 0) {
    console.log("No entendi tu respuesta");
}
else {
    console.log('Tenemos la misma edad!');
}


//TAREA 3 

// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.


let preguntaDocumento = (prompt('¿Usted posee documento?' || '')).toLowerCase();
let edadPermitida = 18;
let preguntarEdad;
if ((preguntaDocumento != 'si') && (preguntaDocumento != 'SI') && (preguntaDocumento != 'Si') && (preguntaDocumento != 'no') && (preguntaDocumento != 'NO') && (preguntaDocumento != 'No')) {
    alert('Perdon, No entendi su respuesta!');
}

else if (preguntaDocumento == 'si' || preguntaDocumento == 'SI' || preguntaDocumento == 'Si') {
    comprobacionEdad(preguntarEdad);
}
else if (preguntaDocumento.trim().length === 0) {
    console.log("No entendi tu respuesta");
}
else {
    alert('No traes documento, No puedes pasar')
}

function comprobacionEdad(preguntarEdad) {
    preguntarEdad = Number(prompt('¿Cual es su edad?' || '')).toLowerCase();
    if (preguntarEdad < 18) {
        console.log(`No puedes pasar tienes ${preguntarEdad},tienes que ser mayor de edad`)
    }
    else if (preguntarEdad.trim().length === 0) {
        console.log("No entendi tu respuesta");
    }
    else if (preguntarEdad >= 18) {
        console.log('Perfecto! puedes pasar al bar');
    }
}
