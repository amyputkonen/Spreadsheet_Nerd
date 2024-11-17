let timer;
let countdown = 25 * 60; // 25 minutes
const display = document.getElementById('time');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

function updateDisplay() {
  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;
  display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
  if (!timer) {
    timer = setInterval(() => {
      if (countdown > 0) {
        countdown--;
        updateDisplay();
      } else {
        clearInterval(timer);
      }
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  pauseTimer();
  countdown = 25 * 60;
  updateDisplay();
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

updateDisplay();
