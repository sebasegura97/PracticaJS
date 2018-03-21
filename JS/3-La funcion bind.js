// No se entendio la explicacion de platzi, buscar en internet si se necesita

class Toggable {
  constructor(element) {
    this.element = element
    this.element.innerHTML = 'off'
    this.activated = false
    this.element.addEventListener('click', this.onClick)
  }
  onClick(){
    // cambiar estado interno
    this.activated = !this.activated
    this.toggleText()
  }
  toggleText(){
    // cambiar texto
    this.element.innerHTML = this.activated ? 'On' : 'Off'
  }


}
const button = document.getElementById('boton')
const miBoton = new Toggable(button)
