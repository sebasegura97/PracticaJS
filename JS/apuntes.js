// prototype.bind(this) crea una nueva funcion con el contexto de this.
// this hace referencia al contexto donde this es llamado.
//
// pero perfectamente se le podria asignar otro contexto distinto de
// this. Por ejemplo:


var foo = {
    x: 3
}

var bar = function(){
    console.log(this.x);
}

bar(); // undefined

var boundFunc = bar.bind(foo);

boundFunc(); // 3

// En el ejemplo anterior observamos como a boundFunc se le asigna el
// contexto de bar a la cual, a su vez agrega el contexto de foo.

// Esto quiere decir que boundFunc tendra los metodos y variables
//  de foo y bar.
