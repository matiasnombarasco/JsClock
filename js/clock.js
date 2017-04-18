/**
 * Created by Tox on 15/04/2017.
 */

//# region - valores por defecto -
var horaI = 8;
var minI = 0;
var horaF = 17;
var minF = 0;
//#endregion

var inputHoraI;
var inputMinI;
var inputHoraF;
var inputMinF;

var horaInicio = new Date().setHours(horaI,minI,0);
var horaFin = new Date().setHours(horaF,minF,0);
var porcentaje;
var horalocal;
var intervalo;

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

function CrearCookie(hora1, min1, hora2, min2){
    var d = new Date().getTime() + (5*365*24*60*60*1000); //fecha de expiración: luego de 5 años
    var fechaExpiracion = new Date (d) ;
    document.cookie = "horaI=" + hora1 + ";"
                    + "minI=" + min1 + ";"
                    + "horaF=" + hora2 + ";"
                    + "minF=" + min2 + ";"
                    + "expires=" + fechaExpiracion;
}

function LeerCookies() {
    var cook = document.cookie;
    if (cook == null){
        CrearCookie(horaI,minI,horaF,minF);
    } else{
        horaI = cook.horaI;
        minI = cook.minI;
        horaF = cook.horaF;
        minF = cook.minF;
    }
}

function ActualizarCookies() {
    CrearCookie(inputHoraI,inputMinI,inputHoraF,inputMinF);
}
