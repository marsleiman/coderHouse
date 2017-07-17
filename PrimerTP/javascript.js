

function presentacion() {
    var nombre = prompt("cual es tu nombre?");
    alert("Hola " + nombre);
    console.log("Hola ", nombre);

    var anoNacimiento = parseInt(prompt("en que año naciste?"));
    alert("Tu edad es" + (2017 - anoNacimiento));

    var valor2 = parseInt(prompt("Cual es tu número favorito?"));
    console.Log("Tu numero de la suerte es el ", valor1 * valor2);

    if (respuesta == "si" || respuesta == "Si") {
        alert("Seguimos con la clase!");
    } else if (respuesta == "no") {
        alert("Adios!")
    } else {
        alert("No entendí, podrías volver a intentar?");
    }
}


function presentacion2() {
    alert('Implementar');
}

function diasDeLaSemana() {
    alert('implementar');
}


function otraCosa() {
//Empiezan los IF
    if (nombre == "camila") {
        alert("Hola profe!");
    } else if (!empty(nombre)) {
        alert("Hola " + nombre + "!");
    } else {
        alert("No escribiste tu nombre");
        nombre ? alert("Hola" + nombre + "!") : alert("No escribiste tu nombre")
    }

    var nombre = prompt("Cual es tu nombre?");
    if (nombre) {
        nombre == "camila" ? alert("Hola profe!") : alert("Hola " + nombre + "!");
    } else {
        alert("No escribiste tu nombre");
    }

    switch (nombre) {
        case "camila":
            alert("Hola profe");
            break;
        case "pablo":
            alert("no hagas memes en clases");
        default:
            alert("Hola " + nombre + "!");

    }

    var listadoDeCompras = ["pan", "leche", "coca", "queso"];

    for (item in listadoDeComplas) {
        console.log("Agregué", listadoDeCompras [item], "a tu compra.");
    }

    var pasos = 0;

    while (pasos < 20) {
        console.log("diste el paso", pasos);
        pasos++;
    }
}


function semana() {
    var semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "sabado", "domingo"]
//    semana.forEach(function(indice,value){
//        console.log(indice);
//    });

    for (i in semana) {
        if (semana[i] == "sabado" || semana[i] == "domingo") {
            console.log(semana[i], "llegó el fin de semana");
        } else {
            console.log(semana[i], "");
        }

    }


}