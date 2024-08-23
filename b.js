
function prueba02() {
    let cantidadDeGatos = +prompt("Ingresa la cantidad de gatos");
    let cantidadDePasos = +prompt("Ingrese la cantidad de pasos de los gatos")
    console.log(
        `
        ------------------------------------------------------------------------
        Ejercicio02
        ------------------------------------------------------------------------
        `
    );
    console.log("Cantidad de gatos = " + cantidadDeGatos);
    console.log("Cantidad de pasos = " + cantidadDePasos);
    let simbolo = "🐈";
    let simbolo1 = "🐾";
    let vacio = simbolo1.repeat(cantidadDePasos);

    for (let i = 1; i <= cantidadDeGatos && i >= 0; i++) {
    console.log( `Gatos #${i}: ` + simbolo + vacio); 
}
}

prueba02();