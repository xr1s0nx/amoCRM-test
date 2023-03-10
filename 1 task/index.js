const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = () => {
  return (count) => {
    const interval = setInterval(() => {
      const hours = Math.floor(count / 3600);
      const minutes = Math.floor((count % 3600) / 60);
      const seconds = Math.floor((count % 3600) % 60);

      timerEl.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
      count--
      if((hours + minutes + seconds) <= 0) {
        clearInterval(interval);
      }
    }, 1000)
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {
  const input = e.target.value;
  e.target.value = input.replace(/\D/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
