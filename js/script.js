// 1. setInterval - запускає функцію багаторазово після часу який ми встановили
// setTimeout - запускає функцію одноразово після часу який ми встановили
// 2. Ні, вона спрацює після виконання поточного скрипту який написаний всередині функції
// 3. Для того, щоб браузер ігнорував цей цикл запуску 

const images = document.querySelectorAll('.image-to-show');
const stopBtn = document.createElement('button');
stopBtn.textContent = 'Stop';
document.body.appendChild(stopBtn);
const resumeBtn = document.createElement('button');
resumeBtn.textContent = 'Resume';
document.body.appendChild(resumeBtn);

let currentImageIndex = 0;
let intervalId;

function cycleImages() {
  images[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.add('active');
}

function startCycling() {
  images[currentImageIndex].classList.add('active');
  intervalId = setInterval(cycleImages, 3000);
}

function stopCycling() {
  clearInterval(intervalId);
  intervalId = null
}

function resumeCycling() {
  intervalId = setInterval(cycleImages, 3000);
}

startCycling();

stopBtn.addEventListener('click', stopCycling);
resumeBtn.addEventListener('click', resumeCycling);