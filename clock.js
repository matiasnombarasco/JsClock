/**
 * Created by Tox on 15/04/2017.
 */

var horaInicio = new Date().setHours(9,0,0);
var horaFin = new Date().setHours(12,0,0);
var porcentaje;
var horalocal;
var intervalo = 60000;

$(document).ready(function () {
    ControlarHorasInicioFin();
    CalcularPorcentaje();
    CalcularIntervalo();
    setInterval(CalcularPorcentaje,intervalo);
})

//se calcula el porcentaje transcurrido y se muestra en pantalla
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
//se calcula el intervalo como el tiempo que corresponde a 1%
function CalcularIntervalo() {
    intervalo = (horaFin - horaInicio) / 100;
}

function ControlarHorasInicioFin() {
    //si la horaFin es menor a la de inicio le sumo un día
    if(horaInicio>=horaFin){
        horaFin += 86400000;
    }
}