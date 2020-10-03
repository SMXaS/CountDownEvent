const daysElements = document.getElementById('days');
const hoursElements = document.getElementById('hours');
const minutesElements = document.getElementById('minutes');
const secondsElements = document.getElementById('seconds');

const countTime = '08 July 2021';

function countdown() {
    const eventsDate = new Date(countTime);
    const todaysDate = new Date();

    const TotalSeconds = (eventsDate - todaysDate) / 1000;
    const days = Math.floor(TotalSeconds / 3600 / 24);
    const hours = Math.floor(TotalSeconds / 3600) % 24;
    const minutes = Math.floor(TotalSeconds / 60) % 60;
    const seconds = Math.floor(TotalSeconds) % 60;

    function formatTime(time){
        return time < 10 ? (`0${time}`) : time;
    }

    daysElements.innerHTML = (days);
    hoursElements.innerHTML = formatTime(hours);
    minutesElements.innerHTML = formatTime(minutes);
    secondsElements.innerHTML = formatTime(seconds);
}

countdown();
setInterval(countdown, 1000);