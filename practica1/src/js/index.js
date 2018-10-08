var array = [];

var boton = document.getElementById("boton");
boton.onclick = function pulsarBoton() {
  var valor = _.random(1, 6);//devuelve un número entero entre 1 y 6
  array.push(valor);
  var dado = document.getElementById("dado");
  dado.textContent = valor; 
}