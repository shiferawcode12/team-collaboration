var startTime;
var elapsedTime = 0;
var intervalId;
var lapNumber = 1;

function start() {
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 10);
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("lap").disabled = false;
}

function stop() {
    clearInterval(intervalId);
    elapsedTime = Date.now() - startTime;
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
}

function reset() {
    stop();
    elapsedTime = 0;
    lapNumber = 1;
    document.getElementById("time").innerHTML = "00:00:00:00";
    document.getElementById("lap-times").innerHTML = "";
    document.getElementById("reset").disabled = true;
    document.getElementById("lap").disabled = true;
}

function lap() {
    var lapTime = formatTime(Date.now() - startTime);
    var lapString = "Lap " + lapNumber + ": " + lapTime;
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(lapString));
    document.getElementById("lap-times").appendChild(li);
    lapNumber++;
}

function updateTime() {
    var currentTime = Date.now();
    var timeElapsed = formatTime(currentTime - startTime);
    document.getElementById("time").innerHTML = timeElapsed;
    document.getElementById("reset").disabled = false;
}

function formatTime(time) {
    var milliseconds = ("0" + (Math.floor(time / 10) % 100)).slice(-2);
    var seconds = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
    var minutes = ("0" + (Math.floor(time / 60000) % 60)).slice(-2);
    var hours = ("0" + (Math.floor(time / 3600000))).slice(-2);
    return hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
}
