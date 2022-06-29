const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const am_pm = document.getElementById('am-pm');

const hh = document.getElementById('hh');
const mm = document.getElementById('mm');
const ss = document.getElementById('ss');

function convertToTwoDigits(digit) {
    return (digit < 10) ? '0'+ digit : digit;
    // return digit;
}

function setDashOffset(mul, div) {
    const dashOffset = 440 - (440 * mul) / div;
    return dashOffset;
}



setInterval(()=> {

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ap= h >= 12 ? "PM" : "AM";
    
    if(h>12) {
        h-=12;
    }
    else if(h==0) {
        h = 12;
    }
    
    hours.innerHTML = convertToTwoDigits(h);
    minutes.innerHTML = convertToTwoDigits(m);
    seconds.innerHTML = convertToTwoDigits(s);
    am_pm.innerHTML = ap;

    hh.style.strokeDashoffset = setDashOffset(h,12);
    mm.style.strokeDashoffset = setDashOffset(m,60);
    ss.style.strokeDashoffset = setDashOffset(s,60);
    
});


