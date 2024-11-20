let btnStart= document.querySelector(".start");
let btnStop= document.querySelector(".stop");
let btnRestart= document.querySelector(".restart");

let hrs = 0, mins = 0, secs = 0, ms = 0;
let startTime;
btnStart.addEventListener('click',()=>{
 
   startTime= setInterval(()=>{
  
       ms++;
       if (ms === 100) {
        ms = 0;
        secs++;
    }
    if (secs === 60) {
      secs = 0;
      mins++;
  }
  if (mins === 60) {
    mins = 0;
    hrs++;
}
       btnStart.disabled=true;
       btnStop.disabled=false;
       update();
    },10);
});

btnStop.addEventListener('click',()=>{
  clearInterval(startTime);
  update();
     btnStart.disabled=false;
     btnStop.disabled=true;
});
btnRestart.addEventListener('click',()=>{
  hrs=mins=secs=ms=0;
  update();
  clearInterval(startTime);
  btnStart.disabled= false;
  btnStop.disabled=true;

});

function update(){
  let phr = hrs<10? '0'+ hrs:hrs;
  let pmin = mins<10? '0'+ mins:mins;
  let psec = secs<10? '0'+ secs:secs;
  let pms = ms<10? '0'+ ms:ms;

  document.querySelector('.hrs').innerText= phr;
  document.querySelector('.mins').innerText= pmin;
  document.querySelector('.secs').innerText=psec;
  document.querySelector('.ms').innerText=pms;
}



















































































/*// Select buttons
let btnStart = document.querySelector(".start");
let btnStop = document.querySelector(".stop");
let btnRestart = document.querySelector(".restart");

// Initialize timer variables
let hrs = 0, mins = 0, secs = 0, ms = 0;
let startTimer;

// Event listener for the Start button
btnStart.addEventListener('click', () => {
    btnStart.classList.add('start-active');
    btnStop.classList.remove('stop-active');
    btnStop.disabled = false;
    btnStart.disabled = true;
    
    // Start the timer
    startTimer = setInterval(() => {
        ms++;
        if (ms === 100) {
            ms = 0;
            secs++;
        }
        if (secs === 60) {
            secs = 0;
            mins++;
        }
        if (mins === 60) {
            mins = 0;
            hrs++;
        }
        update();
    }, 10);
});

// Event listener for the Stop button
btnStop.addEventListener('click', () => {
    clearInterval(startTimer);
    btnStart.disabled = false;
    btnStop.disabled = true;
});

// Event listener for the Restart button
btnRestart.addEventListener('click', () => {
    hrs = mins = secs = ms = 0;
    clearInterval(startTimer);
    update();
    btnStart.disabled = false;
    btnStop.disabled = true;
});

// Function to update the displayed time
function update() {
    let phrs = hrs < 10 ? '0' + hrs : hrs;
    let pmin = mins < 10 ? '0' + mins : mins;
    let psec = secs < 10 ? '0' + secs : secs;
    let pms = ms < 10 ? '0' + ms : ms;

    document.querySelector('.hrs').innerText = phrs;
    document.querySelector('.mins').innerText = pmin;
    document.querySelector('.secs').innerText = psec;
    document.querySelector('.ms').innerText = pms;
} */
