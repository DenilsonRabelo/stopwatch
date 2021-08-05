var segundos = 0
var minutos = 0
var horas = 0
var dias = 0

var cronometro;
var st = 0

function start(){
    if (st == 0){
    cronometro = setInterval(() => (timer()), 1000)
    st = 1
    }
}

function pause(){
    st = 0
    clearInterval(cronometro)
}

function stop(){
    st = 0
    clearInterval(cronometro)
    segundos = 0
    minutos = 0
    horas = 0
    document.getElementById('contador').innerText = '0:00:00:00'
}

function timer(){
    segundos++
    if (segundos > 60) {
        minutos++
        segundos = 0
        if (minutos > 60){
            horas++
            minutos = 0
            if (horas > 60){
                dias++
            }
        }
    }
    var tempo = dias + ':' + (horas < 10 ? '0' + horas : horas + horas) + ':' + (minutos < 10 ? '0' + minutos : minutos) + ':' + (segundos < 10 ? '0' + segundos : segundos)
    document.getElementById('contador').innerText = tempo
}
