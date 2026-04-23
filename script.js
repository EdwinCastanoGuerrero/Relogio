/* 
Cronómetro
----------------------------------------------
Criar um cronômetro que conta o tempo em segundos, minutos e horas. 
Deve apresentar também os milissegundos.
O cronômetro deve ter os seguintes botões:
- Iniciar
- Pausar
- Reiniciar
*/


const ButtonStart = document.getElementById('start');
const ButtonPause = document.getElementById('pause');
const ButtonReset = document.getElementById('reset');

const display = document.getElementById('display_main');
const displayMilliseconds = document.getElementById('display_milliseconds');

let seconds = 0;
let milliseconds = 0;
let interval = null;
let isRunning = false;



ButtonStart.addEventListener('click', startTimer);
ButtonPause.addEventListener('click', pauseTimer);
ButtonReset.addEventListener('click', resetTimer);

function startTimer(){
    if (isRunning) return;
    isRunning = true;
    interval = setInterval(
        updateTimer, 10);
}

function pauseTimer(){
    isRunning = false;
    clearInterval(interval);
}

function resetTimer(){
    isRunning = false;
    clearInterval(interval);
    seconds = 0;
    milliseconds = 0;
    display.textContent = seconds;
    displayMilliseconds.textContent = milliseconds;
}





function updateTimer(){

}