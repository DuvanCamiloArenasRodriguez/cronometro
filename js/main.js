let horas = 0 , minutos = 0, segundos = 0

let botonPlay = document.querySelector('#play').addEventListener('click', intervalo)
document.querySelector('#play').addEventListener('click',ocultarPlay)
let botonRepeat = document.querySelector('#repeat').addEventListener('click', reiniciar)
document.querySelector('#repeat').addEventListener('click',pausa)
let botonPause = document.querySelector('#pausa').addEventListener('click',pausa)

let sec = document.querySelector('#segundos')
let min = document.querySelector('#minutos')
let hour = document.querySelector('#horas')
// let detener = ''

function tiempo() {
    // let hAux, mAux, sAux
    segundos ++
    if (segundos > 59) {
        minutos ++ 
        segundos = 0

    }
    if (minutos > 59) {
        horas ++
        minutos = 0
    }
    sec.textContent =  segundos <=  9 ? `:0${segundos}`: segundos
    min.textContent =  minutos <=  9 ? `:0${minutos}`: minutos
    hour.textContent =  horas <=  9 ? `0${horas}`: horas
}

function intervalo() {
    tiempo()
    detener = setInterval(tiempo,1000)
    console.log('Hola')
}

function ocultarPlay() {
    // botonPlay.toggle()
    document.getElementById("iniciar").style.display = 'none'
    document.getElementById("parar").style.display = 'flex'
}


function pausa() {
    clearInterval(detener)
    console.log('Hola hola')
}

function reiniciar() {
    sec.textContent =  `:00`
    min.textContent =  `:00`
    hour.textContent = `00`
    console.log('Parar')
    document.getElementById("iniciar").style.display = 'flex'
    document.getElementById("parar").style.display = 'none'
    horas = 0 , minutos = 0, segundos = 0
}

