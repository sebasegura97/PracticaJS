// call y apply funcionan para asignar el contexto a una funcion, se pueden usar indistintamente


const seba = {
  nombre: 'Seba',
  apellido: 'Segura'
}

function saludar(veces, uppercase) {
  let str = `Hola ${this.nombre} ${this.apellido}`
  str = uppercase ? str.toUpperCase()  : str // Si el parametro uppercase es true se pasa str.toUpperCase y si es false se pasa str
  for (let i = 0; i < veces; i++) {
    console.log(str)
  }
}

saludar(2, true) // En este caso this esta haciendo referencia al contexto global window
          // El resultado sera Hola undefind undefind

saludar.call(seba, 3, true) // En este caso call pasa como parametro el contexto (seba) y el parametro de la funcion saludar (3)
saludar.apply(seba, [6, false]) // La unica diferencia enter call y apply es que en apply los parametros se pasan en un array
