/**
 * Created by Tox on 15/04/2017.
 */

var horaInicio = new Date().setHours(9,0);
var horaFin = new Date().setHours(10,0);
var porcentaje;

var horalocal = new Date().getTime();

$(document).ready(CalcularPorcentaje);

function CalcularPorcentaje() {

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