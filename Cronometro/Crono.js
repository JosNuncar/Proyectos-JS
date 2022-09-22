class Crono {

  tiempoInicio = 0;
  tiempoFinal = 0;
  tiempoTotal = 0;
  segundero = 0;
  intervalo = 0;

  constructor(output) {
    this.output = output;
  }


  // Quiero que la nueva instancia que creemos sea capaz de iniciar un cronómetro de tiempo con un método
  startCrono() {
    if(this.tiempoInicio !== 0){
      console.error('¡No puedo empezar un cronómetro ya empezado!');
      return;
    }
    this.tiempoInicio = Date.now();


    this.intervalo = setInterval(()=>{ 
      this.segundero += 0.1;
      this.output.innerText = this.segundero.toFixed(1); 
    }, 100);
  }
    
  
  // Quiero que podamos parar el tiempo cuando queramos usando otro método
  stopCrono() {
    // Revisamos que no haya sido parado ya
    if(this.tiempoFinal !== 0){
      console.error('¡Ya estaba parado!');
      return;
    }

    // Luego revisamos que se haya iniciado primero
    if(this.tiempoInicio === 0) {
      console.error('¡Primero tendrás que encenderlo!');
      return;
    }
    this.tiempoFinal = Date.now();
    this.tiempoTotal = this.tiempoFinal - this.tiempoInicio;

    clearInterval(this.intervalo);
    this.output.innerText = (this.tiempoTotal / 1000).toFixed(2);
  }
  
  // Quiero que podamos resetear el cronómetro a 0 con otro método
  resetCrono() {
    // revisar que final sea diferente de 0
    if(this.tiempoTotal === 0) {
      console.error('No hay ningún tiempo que resetear.')
      return;
    }

    this.tiempoTotal = 0;
    this.tiempoInicio = 0;
    this.tiempoFinal = 0;
    this.segundero = 0;
    this.output.innerText = 0;
  }


  // Quiero un método si puede ser de tipo get, que cuando lo llame me diga el tiempo que ha pasado
  get time() {
    if(this.tiempoTotal === 0) {
      console.error('Primero tienes que encender y parar el cronómetro.');
      return;
    }
    return `${(this.tiempoTotal / 1000).toFixed(2)}seg.`
  }
}