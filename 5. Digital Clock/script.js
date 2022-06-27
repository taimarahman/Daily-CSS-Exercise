function convertToTwoDigits(digit) {
    return (digit < 10) ? '0'+ digit : digit;
    // return digit;
}

const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const am_pm = document.getElementById('am-pm');

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
    
});


