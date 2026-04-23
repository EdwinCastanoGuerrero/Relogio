const ButtonStart = document.getElementById('start');
const ButtonPause = document.getElementById('pause');
const ButtonReset = document.getElementById('reset');
const display = document.getElementById('display_main');
const displayMilliseconds = document.getElementById('display_milliseconds');


let seconds = 0;
let milliseconds = 0;
let interval = null;
let isRunning = false;



//eventos
ButtonStart.addEventListener('click', startTimer);
ButtonPause.addEventListener('click', pauseTimer);
ButtonReset.addEventListener('click', resetTimer);


//iniciar
function startTimer(){
    if (isRunning) return;
    isRunning = true;
    interval = setInterval(updateTimer, 10);
}
//pausar
function pauseTimer(){
    isRunning = false;
    clearInterval(interval);
}

//reset
function resetTimer(){
    isRunning = false;
    clearInterval(interval);
    seconds = 0;
    milliseconds = 0;
    display.textContent = formatTime(seconds);
    displayMilliseconds.textContent = formatMilliseconds(milliseconds);
}

//mostrar na tela o resultado
function updateTimer(){
    milliseconds += 10;
    if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds++;
    }
    display.textContent = formatTime(seconds);
    displayMilliseconds.textContent = formatMilliseconds(milliseconds);
}



//função principal
function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function formatMilliseconds(milliseconds) {
    return milliseconds.toString().padStart(3, '0');
}
