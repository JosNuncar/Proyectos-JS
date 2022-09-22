
const inputNombre = document.getElementById('nombre');
const selectEstudio = document.getElementById('estudios');
const boton = document.querySelector('.boton');
const lista = document.querySelector('.lista');



const handleAddEstudio = () => {

  const nombre = inputNombre.value;
  const estudio = selectEstudio.value;
  
 
  const li = document.createElement('li');
    
  li.innerHTML = `${nombre} -> ${estudio} <span class="borrar">❌</span>`;
  
  lista.append(li);
  
  inputNombre.value = '';
  inputNombre.focus();
  selectEstudio.value = '';
    
  console.log(li);
  
}

boton.addEventListener('click', handleAddEstudio);

document.addEventListener('keyup', (e) => {
  if(e.key === "Enter") {
    handleAddEstudio();
  }
})




lista.addEventListener('click', (e) => {

  if(e.target.classList.contains('borrar')) {
    e.target.parentElement.remove();
  }

})