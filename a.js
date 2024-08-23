
function prueba01() {
    let cantidad = +prompt("Ingresa la cantidad de gatos");
    console.log(
        `
        ------------------------------------------------------------------------
        Ejercicio01
        ------------------------------------------------------------------------
        `
    );
    console.log("Cantidad de gatos = " + cantidad);
    let simbolo = "😺";
    let simbolo1 = "😸";
    let simbolo2 = "😹";
    let vacio = "";
    
    for (let i = 1; i <= cantidad && i >= 0; i++) {

    if (vacio == simbolo) {
        vacio = simbolo1;
    } else if (vacio == simbolo1) {
        vacio = simbolo2;
    } else{
        vacio = simbolo;
    }
    console.log(`Gatos #${i}: ` + vacio);
}
}

prueba01();