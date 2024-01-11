var miliseconds = 0
var seconds = 0
var minutes = 0
var hours = 0

getmili = document.getElementById('mili')
getsec = document.getElementById('sec')
getmin = document.getElementById('min')
gethours = document.getElementById('hours')
var interval;


function Start() {
    interval = setInterval(function () {
        miliseconds++
        getmili.innerHTML = miliseconds
        if (miliseconds >= 100) {
            seconds++
            getsec.innerHTML = seconds
            miliseconds = 0
        }
        else if (seconds >= 60) {
            minutes++
            getmin.innerHTML = minutes
            seconds = 0
        }
        else if (minutes >= 60) {
            hours++
            gethours.innerHTML = hours
            minutes = 0
        }
    },10)

    document.getElementById('dis').disabled = true
}

function Stop() {
    clearInterval(interval)
    document.getElementById('dis').disabled = false
}

function Reset() {
    var miliseconds = 0
    var seconds = 0
    var minutes = 0
    var hours = 0

    getmili.innerHTML = miliseconds
    getsec.innerHTML = seconds
    getmin.innerHTML = minutes
    gethours.innerHTML = hours
}