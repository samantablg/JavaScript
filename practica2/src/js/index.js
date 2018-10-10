var jugador = document.querySelector('.jugador');
var cpu = document.querySelector('.cpu');

var boton = document.getElementById("boton");
boton.onclick = function pulsarBoton() {
  let rango = _.range(1,91);
  let numeros = _.shuffle(rango);
  let valor = numeros.splice(0,1);

  if (numeros == []) {
    alert('Han salido todos los números -- Fallo algo en el juego');
  }

  var dado = document.getElementById("dado");
  dado.textContent = valor; 

  return valor;
}

function crearCarton(){
  let rango = _.range(1,91);
  let numeros = _.shuffle(rango);
  var carton = numeros.splice(0,15);
  
  return carton;
}

function mostrarCarton(carton,usuario){
  for (var i = 0; i < carton.length; i++){
    var div = document.createElement('div');
    div.className = `casilla numero${i}`;
    div.textContent = carton[i];
    usuario.appendChild(div);
  }
}

function jugar(valor, carton){
  for (var i = 0; i < carton.length; i++){
    if (valor == carton[i]){
      var elem = document.querySelector(`.numero${i}`);
      elem.style.backgroundColor = red;
    }
  } 
}

function comprobar(carton){
}

var cartonjugador = crearCarton();
mostrarCarton(cartonjugador,jugador);
var cartoncpu = crearCarton();
mostrarCarton(cartoncpu,cpu);
jugar(valor, cartonjugador);