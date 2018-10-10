const jugador = document.querySelector('.jugador');
const cpu = document.querySelector('.cpu');
const bolas = _.shuffle(_.range(1,91));
const dado = document.getElementById("dado");

var boton = document.querySelector('.boton');
//var func = function (){}
boton.onclick = function() {

  let valor = bolas.pop();

  jugar(valor, cartonjugador);
  jugar(valor, cartoncpu);  
 
  dado.textContent = valor; 

  //comprobación del juego

  if (array_cartonjugador.length == array_cartoncpu.length && array_cartonjugador.length == 0) {
    alert ('Empate');
  } else if (array_cartonjugador.length == 0) {
    alert ('Has ganado');
  } else if (array_cartoncpu.length == 0) {
    alert ('Has perdido');
  }
}

function crearCarton(){
  let rango = _.range(1,91);
  let numeros = _.shuffle(rango);
  var carton = numeros.splice(0,15);
  
  return carton;
}

function mostrarCarton(carton, usuario){
  for (var i = 0; i < carton.length; i++){
    var div = document.createElement('div');
    var numero = carton[i];

    div.className = `casilla numero${numero}`;
    div.textContent = numero;
    usuario.appendChild(div);
  }
}

function jugar(valor, carton){
  var elementos = document.querySelectorAll(`.numero${valor}`);
  for (var i = 0; i < elementos.length; i++) {
    elementos[i].classList.add('tachado');
  }
  _.pull(carton, valor);
}

var cartonjugador = crearCarton();
mostrarCarton(cartonjugador,jugador);
var cartoncpu = crearCarton();
mostrarCarton(cartoncpu, cpu);


//boton.addEventListener('click',func);
//boton.removeEventListener('click',func);