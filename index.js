let hour = 0;
let minute = 0;
let second = 0;
let milisecond = 0;
// ---------------------------Code Main functionality--------------------------
let timer = false;

function start() {
  timer = true;
  brainOfStopWatch();
}
function brainOfStopWatch() {
  if (timer == true) {
    milisecond++;
    if (milisecond == 100) {
      second++;
      milisecond = 0;
    }
    if (second == 60) {
      minute++;
      second = 0;
    }
    if (minute == 60) {
      hour++;
      minute = 0;
    }
    // -------------------------
    let getHour = hour;
    let getMinute = minute;
    let getSecond = second;
    if (second < 10) {
      getSecond = "0" + second;
    }
    if (minute < 10) {
      getMinute = "0" + minute;
    }
    if (hour < 10) {
      getHour = "0" + hour;
    }
    setTimeout("brainOfStopWatch()", 10);

    document.getElementById("mili").textContent = milisecond;
    document.getElementById("second").textContent = getSecond;
    document.getElementById("minute").textContent = getMinute;
    document.getElementById("hour").textContent = getHour;
  }
}

// ------------------------------code stop function----------------------
function stop() {
  timer = false;
  myFAn();
  return;
}
// ---------------------code reset function----------------------------
function reset() {
  location.reload();
  return;
}
