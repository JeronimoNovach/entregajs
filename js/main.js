class Changuito {
    constructor() {
        this.ropa = []
    }

    agregarRopa(nombreRopa, precioRopa) {
        this.ropa.push({id:this.generarId(), nombre:nombreRopa.toLocaleUpperCase(), precio:precioRopa});
        console.log("Agregaste un Producto!");
    }

    eliminarRopa(id) {
        this.ropa = this.ropa.filter(item => item.id != id);
        console.log("Eliminaste un Producto!");
    }

    totalRopa() {
        return this.ropa.length;
    }

    sumaTotal() {
         let total = 0;
        
        this.ropa.forEach(item => {
            total += item.precio; 
        });

        return total; 
    }

    generarId() {
        let max = 0;

        this.ropa.forEach(item => {
            if (item.id > max) {
                max = item.id;
            }
        });

        return max + 1;
    }

    listarRopa() {
        let contenido = "Productos agregados:\n\n";

        this.ropa.forEach(item => {
            contenido += `${item.id} - ${item.nombre} $${item.precio}\n` 
        });

        return contenido;
    }
}

let nombre = "";
let precio = 0;
const changuito = new Changuito();

// Agrego productos
while (nombre.toLocaleUpperCase() != "ESC") {
    nombre = prompt("Ingrese el Nombre del Producto:\n(ESCRIBA ESC PARA SALIR)");
    
    if (nombre.toLocaleUpperCase() == "ESC") {
        break;
    }
    
    precio = parseFloat(prompt("Ingrese el Precio del Producto:"));
    changuito.agregarRopa(nombre, precio);
}

// Valido el chango
if (changuito.totalRopa() > 0) {
    let id;

    // Elimino Productos
    while (id != 0) {
        id = parseInt(prompt(changuito.listarRopa() + "\nIngrese el ID del Producto a Eliminar:\n(ESCRIBA 0 PARA SALIR)"));
        
        if (id > 0) {
            changuito.eliminarRopa(id);
        }
    
        if (changuito.totalRopa() == 0) {
            break;
        }
    }

    // Total de productos
    
    alert(`${changuito.listarRopa()}\nTotal a Pagar: $${changuito.sumaTotal()}`);
} else {
    alert("No se encontraron Productos agregados en el Carrito!");
}