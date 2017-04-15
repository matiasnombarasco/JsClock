/**
 * Created by Tox on 15/04/2017.
 */

var horaInicio = new Date().setHours(9);
var horaFin = new Date().setHours(12);
var porcentaje;
var horalocal;
var intervalo = 60000;

$(document).ready(function () {
    CalcularPorcentaje();
    CalcularIntervalo();
    setInterval(CalcularPorcentaje,intervalo);
})

function CalcularPorcentaje() {

    horalocal = new Date().getTime();
    var total = (horaFin-horaInicio);

    if( horaInicio>horalocal){
        porcentaje = 0;
    }
    else if (horaFin<horalocal) {
        porcentaje = 100;
    }
    else {
        var tiempo = (horalocal - horaInicio);
        porcentaje = (tiempo * 100) / total ;
        porcentaje = parseInt(porcentaje);
    }
    document.getElementById("porcentaje").innerHTML = porcentaje + "%";
}

function CalcularIntervalo() {
    intervalo = (horaFin - horaInicio) / 100;
}