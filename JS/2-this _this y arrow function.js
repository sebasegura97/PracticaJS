class Persona {
  constructor(nombre, amigos = []) {
    this.nombre = nombre
    this.amigos = amigos
  }
  listarAmigos(){
    const _this = this // Para poder usar a this de la clase persona dentro de una funcion
    this.amigos.forEach(function(amigo){
      // console.log(`Hola mi nombre es ${this.nombre} y soy amigo de ${this.amigo}`) //Esto no funciona, ya que this no esta dentro del scope de la funcion
      console.log(`Hola mi nombre es ${_this.nombre} y soy amigo de ${_this.amigos}`) // Esto si funciona
    })
  }
  // La mejor forma es hacerlo con una arrow function, ya que de esa manera this automaticamente toma el valor de la clase padre:
  mostrarAmigos(){
    this.amigos.forEach((amigos) => {
      console.log(`Hola mi nombre es ${this.nombre} y soy amigo de ${this.amigos}`)
    })
  }
}

const seba = new Persona("Seba", ["franco", "figue", "eze"])
