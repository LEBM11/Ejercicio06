
function prueba03() {
    let cantidadDeGatos = +prompt("Ingresa la cantidad de gatos");
    let cantidadDePasos = +prompt("Ingrese la cantidad de pasos de los gatos")
    console.log(
        `
        ------------------------------------------------------------------------
        Ejercicio03
        ------------------------------------------------------------------------
        `
    );
    console.log("Cantidad de gatos = " + cantidadDeGatos);
    console.log("Cantidad de pasos = " + cantidadDePasos)
    let simbolo = "🐈";
    let simbolo1 = "🐾";
    let simbolo2 ="⬛"
    let vacio = simbolo1.repeat(cantidadDePasos);
    for (let i = 1; i <= cantidadDeGatos && i >= 0; i++) {

    if (i % 2 == 0){
        console.log(`Gatos #${i}: ` + simbolo + simbolo2  + vacio)
    } else {
    console.log(`Gatos #${i}: ` + simbolo + vacio);
    }
}
}

prueba03();