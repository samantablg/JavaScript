function crearCarton(rango){
  var rango = _.range(1,91);
  var numeros = _.shuffle(rango);
  var carton = [];
  for (var i = 0; i < 15; i++){
    var cas = numeros.splice(0,1);
  }
  if (!carton.includes(cas)){
    carton.push(cas);
  }
  
  return carton;
}

crearCarton(rango);

function jugar(){
  
}