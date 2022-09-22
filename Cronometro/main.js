

const btnStart = document.getElementById('start');
const btnStop = document.getElementById('stop');
const btnReset = document.getElementById('reset');
const miOutput = document.querySelector('.output');




const c1 = new Crono(miOutput);



btnStart.addEventListener('click',()=> c1.startCrono());
btnStop.addEventListener('click', ()=> c1.stopCrono());
btnReset.addEventListener('click', ()=> c1.resetCrono());