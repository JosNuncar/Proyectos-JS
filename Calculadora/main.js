const formulario = document.querySelector('form');
let isResultado = false;
const link = document.querySelector('a');

const cajaFinal = document.createElement('h2');


formulario.addEventListener('submit', (e) => { 
  e.preventDefault();  

  const num1 = Number(formulario.primero.value);
  const num2 = Number(formulario.segundo.value);

  let resultado = 0;

  if(e.submitter.name === 'sumar'){
    resultado = num1 + num2;
  }else if(e.submitter.name === 'restar') {
    resultado = num1 - num2;
  }else if(e.submitter.name === 'multiplicar') {
    resultado = num1 * num2;
  }else if(e.submitter.name === 'dividir') {
    resultado = num1 / num2;
  }
  
  if(!isResultado){
    cajaFinal.classList.add('text-center', 'mt-4');
    cajaFinal.innerHTML = resultado;
    formulario.after(cajaFinal);
    isResultado = !isResultado;
  } else {
    cajaFinal.innerHTML = resultado;
  }

});