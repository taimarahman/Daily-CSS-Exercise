function convertToTwoDigits(digit) {
    return (digit < 10) ? '0' + digit : digit;
}

const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const ampm = document.getElementById('ampm');

setInterval(()=> {

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h >= 12 ? "PM" : "AM";
    
    if(h>12) {
        h-=12;
    }
    
    convertToTwoDigits(h);
    convertToTwoDigits(m);
    convertToTwoDigits(s);
    
    
});


hours.innerHTML = h;
minutes.innerHTML = m;
seconds.innerHTML = s;
ampm.innerHTML = am;