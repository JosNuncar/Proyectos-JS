
const formulario = document.getElementById('formulario');
const listaTareas = document.querySelector('.lista-tareas');



formulario.addEventListener('submit', (event)=>{
  
  event.preventDefault();

  
  const task = formulario.task.value;
  
  
  const newTask = document.createElement('h2');   
  newTask.className = 'text-light';
  newTask.innerHTML = `${task} <span class="borrar">❌</span>`;
  
  
  listaTareas.append(newTask);
  
 
  formulario.task.value = '';
})



document.addEventListener('click', (e) => {

  if(e.target.classList.contains('borrar')){
    e.target.parentElement.remove();
  }

})