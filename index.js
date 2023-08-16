
setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock() {
    let currentTime = new Date();
    let secondsRatio = currentTime.getSeconds() / 60;
    let minutesRatio = (secondsRatio + currentTime.getMinutes()) / 60;
    let hoursRatio = (minutesRatio + currentTime.getHours()) / 12;

    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotate', rotationRatio * 360);
}

setClock();