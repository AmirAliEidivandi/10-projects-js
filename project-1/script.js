const daysEl = document.querySelector("#days");
const hoursEl = document.querySelector("#hours");
const minEl = document.querySelector("#mins");
const secondsEl = document.querySelector("#seconds");

const newYears = "1 Jan 2023";

function countDown() {
    const newYearsData = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = new Date(newYearsData - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countDown();

setInterval(countDown, 1000);
