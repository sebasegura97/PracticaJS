// Primero se hara el log de Hola y luego se mostrara 'ya pasaron 3 segundos'

setTimeout(function callback(){
  console.log('Ya pasaron 3 segundos')
}, 3000)

console.log('Hola')

// setTimeout delega la ejecucion de la funcion al navegador, el cual espera que pasen los X milisegundos
// seteados y la coloca en la pila de js, mientras tanto el motor de js continua ejecutando la pila
// Por eso en el siguiente ejemplo se muestra primero B y luego A (console.log ('A') se envia al eventloop (la pila
// del navegador) por lo que console.log('B') pasa a ser el primer elemento de la pila de js

setTimeout(function callback(){
  console.log('A')
}, 0)

console.log('B')

// setTimeout(Funcion(), tiempo) son los parametros

setTimeout(() => {
  document.write("Han pasado 5 segundos")
}, 5000)
