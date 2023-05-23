let nombre = prompt (("Ingrese su nombre"));
let barbero = prompt (("Ingrese en numero un barbero: Jero (1), Giuse (2), Victor (3)")) .toLowerCase;
let horario = prompt (("Ingrese un horario entre las 10 y las 20"));
const turno = prompt (("Ingrese un dia ( Lunes, Martes, Miercoles, Jueves, Viernes, Sabado )")) .toLowerCase;

while (barbero != "1") {
  alert ( "Hola, " + nombre + "\n" + "Reservaste con Jero" )
    barbero = prompt(("Ingresar un barbero existente"));



let nombre = prompt (("Ingrese su nombre"));
let barbero = prompt (("Ingrese en numero un barbero: Jero (1), Giuse (2), Victor (3)")) ;

while ((barbero !== "1") && (barbero !== "2") && (barbero !== "3")) {
    switch ( barbero ) {
        case "1" :
            alert ("Reservaste con Jero")
            break;
        case "2" :
            alert ("Reservaste con Giuse")
            break;
        case "3" :
            alert ("Reservaste con Victor")
            break;
        default :
            alert ("Barbero inexistente")
            break;
    }
    barbero = prompt(("Ingrese un barbero existente"))
}
}
