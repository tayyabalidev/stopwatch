
var second = 0;
var minute = 0;
var hour = 0;

setInterval(function() {
    var d = new Date();
    second = d.getSeconds() * 6;
    minute = d.getMinutes() * 6;
    hour = (d.getHours() % 12 + d.getMinutes() / 60) * 30; 
    document.getElementById("second-hand").style.transform = "rotate(" + second + "deg)";
    document.getElementById("minute-hand").style.transform = "rotate(" + minute + "deg)";
    document.getElementById("hour-hand").style.transform = "rotate(" + hour + "deg)";
}, 1000);
