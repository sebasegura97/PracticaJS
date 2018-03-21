// Una variable puede recibir cualquier valor, no es necesario definir el tipo
var seba = "seba"
var seba = 25
var seba = true
var seba = new Date()

// O incluso funciones
var seba = function saludar() { alert('ola k ase') }

// Tambien pueden ser un objeto
seba = {
  nombre: "Seba",
  apellido: "Segura",
  edad: 21,
  saludar: function saludar() {
    alert(`hola, me llamo ${this.nombre} ${this.apellido}`) // Para concatenar se usan esas comillas ``
  }
}
seba.saludar()

// Variables... no tan Variables, es el caso de las constantes:
// Las constantes son eso, constantes, no se pueden modificar ni reasignar facilmente.

const numero = 54
numero++ //Esto no funcionara, ni nada que modifique una const
