const jugador = document.querySelector('.jugador');
const cpu = document.querySelector('.cpu');
const bolas = _.shuffle(_.range(1,91));
const dado = document.getElementById("dado");

var boton = document.querySelector('.boton');

boton.onclick = function() {
  let valor = bolas.pop(); //sacar la ultima
  
  jugar(valor, cartonjugador);
  jugar(valor, cartoncpu);  
 
  dado.textContent = valor;
  
  //comprobarlinea(cartonJugador);
  comprobarBingo(cartonjugador, cartoncpu);
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

  return carton;
}

/*function comprobarLinea (cartonjugador) { //terminar
  for (let i = 0; i < 4; i++) {
    if (carton[i].classList.contains('tachado') == true) {
      alert (Haz hecho línea);
    } 
  }
}*/

function comprobarBingo(cartonjugador, cartoncpu) {
  if (cartonjugador.length == cartoncpu.length && cartonjugador.length == 0) {
    alert ('Empate');
    document.querySelector('.boton').remove();
  } else if (cartonjugador.length == 0) {
    alert ('¡Has ganado!');
    document.querySelector('.boton').remove();
  } else if (cartoncpu.length == 0) {
    alert ('¡Has perdido!');
    document.querySelector('.boton').remove();
  }
}

var cartonjugador = crearCarton();
mostrarCarton(cartonjugador,jugador);
var cartoncpu = crearCarton();
mostrarCarton(cartoncpu, cpu);

//boton.addEventListener('click',func);
//boton.removeEventListener('click',func);