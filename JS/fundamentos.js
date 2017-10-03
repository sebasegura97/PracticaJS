// VARIABLES Y TIPOS DE DATOS
  // var puede contener cualquier tipo de dato
    var entero = 7;
    var string = "hola";
    var objeto = {firstName: Sebastian, lastName: Segura};
  // const se usa para definir constantes, es decir variables que una vez definidas no podran ser modificadas. Las funcione son constantes
    const areaTriangulo = (base,altura) => base*altura/2;
    const Pi = 3,14;
  // let se usa para definir una variable local, la cual solo es visible en el bloque que se declaro
    let a = 3
    let b = 4
    console.log(a + b)
      {
        let a = 4
        let b = 4
        console.log(a + b)
      }

// DEFINIR FUNCIONES
  let x = 5
  let y = 9
  const promedio = (x,y) => x + y / 2
  console.log(`El promedio de ${x} y ${y} es: ${promedio(x,y)}`)

// CONDICIONALES
  var edadNecesaria = 13
  var edad = 12
  var acompañanteAdulto = false
  function puedeVerPelicula(edad, acompañanteAdulto) {
    if (edad >= edadNecesaria) {
      console.log("Si puede ver la pelicula");
    }else if (acompañanteAdulto) {
      console.log("Si puede ver la pelicula aunque su edad es ${edad}, se encuentra acompañado por un adulto");
    }
    else (edad < edadNecesaria){
      console.log("No puede pasar");
    }
  }
  puedeVerPelicula(edad, acompañanteAdulto)

  // MANEJO DE STRINGS
    // METODOS UTILES
    str.toUpperCase() // convierte el texto a mayúscula
    str.toLowerCase() // convierte el texto en minúsculas
    str.endsWith(\"AR") // evalúa si el string termina con un texto
    str.startsWith(\'BRA') // evalúa si un string comienza con un texto
    str.slice(inicio, final) // partir un carácter
    str.length // cuantos caracteres tiene el string

    // CONCATENAR
    const palabra = 'Pla' + 'tzi'

    //CONVERTIR A ARRAY
    let str = 'hola'
    str.split('') // resultaria un array ["h", "o", "l", "a"]

    // UNIR ARRAY PARA CONVERTIRLO EN string
    let arr = ['h','o','l','a']
    const str =  arr.join('')

  // FUNCIONES MATEMATICAS´
    math.floor//rendondea hacia abajo 3.9 = 3
    math.ceil//redondea para arriba 3.1 = 4
    math.round// redondea dependiendo 3.1 = 3, 3.5 = 4

  // CICLOS
    for (variable iteradora; condicion ; iterción ) {
    	Bloque de código a ejecutar si la condiciónse cumple
    }
    while (true) {

    }
