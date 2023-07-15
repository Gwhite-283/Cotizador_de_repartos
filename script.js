class Repartos {
    constructor(zona, entregas, cajas, pallets) {
        this.zona = zona;
        this.entregas = entregas;
        this.cajas = cajas;
        this.pallets = pallets;
    }
    agregarAdicional() {
        return this.pallets * 200;
    }
    
    calcularDescuento() {
        if (this.zona == "norte") {
            return this.entregas * 100;
        } else {
            return this.entregas * 200;
        }
    }
}

function crearReparto() {
    let zona = prompt("Ingrese zona");
    let entregas = Number(prompt("Cantidad de entregas"));
    let cajas = Number(prompt("Cantidad de cajas"));
    let pallets = Number(prompt("Cantidad de pallets"));
    let Repartos = new Repartos(zona, entregas, cajas, pallets);
    return Repartos;

}

let i = 1;
while (i < 4) {
    let Repartos = crearReparto();
    console.log(Repartos);
    i++;

}