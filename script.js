const ButtonStart = document.getElementById('start');
const ButtonPause = document.getElementById('pause');
const ButtonReset = document.getElementById('reset');
const display = document.getElementById('display_main');
const displayMilliseconds = document.getElementById('display_milliseconds');
const status = document.getElementById('status');

let seconds = 0;
let milliseconds = 0;
let interval = null;
let isRunning = false;

ButtonStart.addEventListener('click', startTimer);
ButtonPause.addEventListener('click', pauseTimer);
ButtonReset.addEventListener('click', resetTimer);

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    interval = setInterval(updateTimer, 10);
    setStatus('Executando', 'text-emerald-300');
}

function pauseTimer() {
    if (!isRunning) return;
    isRunning = false;
    clearInterval(interval);
    setStatus('Pausado', 'text-amber-300');
}

function resetTimer() {
    isRunning = false;
    clearInterval(interval);
    seconds = 0;
    milliseconds = 0;
    display.textContent = formatTime(seconds);
    displayMilliseconds.textContent = `${formatMilliseconds(milliseconds)} ms`;
    setStatus('Pronto', 'text-sky-300');
}

function updateTimer() {
    milliseconds += 10;
    if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds++;
    }
    display.textContent = formatTime(seconds);
    displayMilliseconds.textContent = `${formatMilliseconds(milliseconds)} ms`;
}

function setStatus(text, colorClass) {
    status.textContent = text;
    status.className = `mt-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-sm uppercase tracking-[0.2em] ${colorClass}`;
}

function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function formatMilliseconds(milliseconds) {
    return milliseconds.toString().padStart(3, '0');
}
