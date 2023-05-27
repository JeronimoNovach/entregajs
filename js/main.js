alert ("Bienvenido a Pupi Barber");

//Solicitar barbero

let barbero = 0;

while ((barbero != 1) && (barbero != 2) && (barbero != 3)) {
    barbero = parseInt(prompt("Ingrese un barbero en numeros:" + "\n" + "1. Jero " + "\n" + "2. Giuse " + "\n" + "3. Victor "));
}

//Solicitar Dia
let dia = prompt("Ingrese un dia: " + "\n" + "Lunes" + "\n" + "Martes" + "\n" + "Miercoles" + "\n" + "Jueves" + "\n" + "Viernes" + "\n" + "Sabado") .toUpperCase();

let diaError = false

if ((dia === "LUNES" ) || (dia === "MARTES" ) || (dia === "MIERCOLES" ) || (dia === "JUEVES" ) || (dia === "VIERNES" ) || (dia === "SABADO" )) {
    alert ("Reservaste el dia: " + dia);
}else {
    alert  (prompt("Dia incorrecto"))
}

//Solicitar Hora

let hora = prompt("Ingrese un horario: " + "\n" + "De 10:00 a 20:00")

for (let i = 10; i <= 20; i++){
    if ( i== 10 ) {
        break;
    }
    alert (i);
}

alert ("Reservaste con: " + barbero + "\n" + "El dia: " + dia + "\n" + "Hora: " + hora )













