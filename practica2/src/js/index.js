var boton = document.getElementById("boton");
boton.onclick = function pulsarBoton() {
  var valor = _.random(1, 90);//devuelve un número entero entre 1 y 30
  var dado = document.getElementById("dado");
  dado.textContent = valor; 
}

function crearCarton(rango){
  var rango = _.range(1,91);
  var numeros = _.shuffle(rango);
  var carton = Array(25);
  for (var i = 0; i < carton.length; i++){
    var cas = numeros.splice(0,1);
  }
  if (!carton.includes(cas)){
    carton.push(cas);
  }
  /*
  var casilla = document.getElementById('casilla');
  elemento.innerHTML = 'carton[i]';
  */
}

crearCarton(rango);

function jugar(){
 
}