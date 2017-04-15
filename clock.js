/**
 * Created by Tox on 15/04/2017.
 */

var horaInicio = new Date().setHours(0,0);
var horaFin = new Date().setHours(8,0);
var porcentaje;

var datetime = new Date().getTime();
var horalocal;

window.onload = CalcularPorcentaje();

function CalcularPorcentaje() {

    var total = (horaFin-horaInicio)();

    if( horaInicio>horalocal){
        porcentaje = 0;
    }
    else if (horaFin<horalocal) {
        porcentaje = 100;
    }
    else {
        var tiempo = (datetime - horaInicio)();
        porcentaje = (tiempo * 100) / total ;
        porcentaje = porcentaje/(1000*60);
        porcentaje = parseInt(porcentaje);
    }
    document.getElementById("boxCenter").innerHTML = porcentaje;
}