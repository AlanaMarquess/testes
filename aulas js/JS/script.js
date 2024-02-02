const botaoPlayPause = document.getElementById('play-pause');
const audioCapitulo = document.geteElementById('audio-capitulo');

const  numeroCapitulos = 10;
let taTocando = 0;

function tocarFaixa(){
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
}
function pausarFaixa(){
    audioCapitulo.play();
} 

function tocarOuPausar() {
    if (taTocando === 0) {
        tocarFaixa();
        taTocando = 1;
    } else {
        pausarFaixa();
        taTocando = 0;
    }
}

botaoPlayPause.addEventListener('click', tocarFaixa);