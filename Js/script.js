/* 
----------------------------Union--------------------------------
*/

function calcularUnion() {
  // Obtener los conjuntos ingresados por el usuario
  var conjuntoX = document.getElementById('ConjuntoA').value.split(',');
  var conjuntoY = document.getElementById('ConjuntoB').value.split(',');
  // Calcular la Unión de conjuntos
  var union = calcularUnionDeConjuntos(conjuntoX, conjuntoY);
  // Mostrar el resultado
  mostrarResultadoUnion(union);
}
function calcularUnionDeConjuntos(conjuntoX, conjuntoY) {
  var union = Array.from(new Set([...conjuntoX, ...conjuntoY]));
  return union;
}
function mostrarResultadoUnion(union) {
  var resultadoContainer = document.getElementById('resultado');
  var cardinalidad = union.length;
  
  resultadoContainer.innerHTML = '<strong>Unión de Conjuntos:</strong><br>' + 'Elementos: ' + JSON.stringify(union) + '<br>' + 'Cardinalidad: ' + cardinalidad;

  /* resultadoContainer.innerHTML = '<strong>Unión de Conjuntos:</strong><p>' + 'Elementos: ' + JSON.stringify(union) + '</p><p>' + 'Cardinalidad: ' + cardinalidad + '</p>'; */
}

/* 
-------------------------------Intersección----------------------------
*/

function calcularInterseccion() {
  // Obtener los conjuntos ingresados por el usuario
  var conjuntoM = document.getElementById('ConjuntoC').value.split(',');
  var conjuntoN = document.getElementById('ConjuntoD').value.split(',');
  // Calcular la Intersección de conjuntos
  var interseccion = calcularInterseccionDeConjuntos(conjuntoM, conjuntoN);
  // Mostrar el resultado
  mostrarResultadoInterseccion(interseccion);
}
function calcularInterseccionDeConjuntos(conjuntoM, conjuntoN) {
  var interseccion = conjuntoM.filter(elemento => conjuntoN.includes(elemento));
  return interseccion;
}
function mostrarResultadoInterseccion(interseccion) {
  var resultadoContainer = document.getElementById('resultado');
  var cardinalidad = interseccion.length;
  resultadoContainer.innerHTML = '<strong>Intersección de Conjuntos:</strong><br>' + 'Elementos: ' + JSON.stringify(interseccion) + '<br>' + 'Cardinalidad: ' + cardinalidad;
}

/* 
----------------------------Diferencia--------------------------------
*/

function calcularDiferenciaA() {
  // Obtener los conjuntos ingresados por el usuario
  var conjuntoP = document.getElementById('ConjuntoA').value.split(',');
  var conjuntoQ = document.getElementById('ConjuntoB').value.split(',');

  // Calcular la Diferencia de conjuntos
  var diferencia = calcularDiferenciaDeConjuntos(conjuntoP, conjuntoQ);

  // Mostrar el resultado
  mostrarResultadoDiferencia(diferencia);
}
function calcularDiferenciaB() {
  // Obtener los conjuntos ingresados por el usuario
  var conjuntoP = document.getElementById('ConjuntoB').value.split(',');
  var conjuntoQ = document.getElementById('ConjuntoA').value.split(',');

  // Calcular la Diferencia de conjuntos
  var diferencia = calcularDiferenciaDeConjuntos(conjuntoP, conjuntoQ);

  // Mostrar el resultado
  mostrarResultadoDiferencia(diferencia);
}
function calcularDiferenciaC() {
  // Obtener los conjuntos ingresados por el usuario
  var conjuntoP = document.getElementById('ConjuntoA').value.split(',');
  var conjuntoQ = document.getElementById('ConjuntoB').value.split(',');

  // Calcular la Diferencia de conjuntos
  var diferencia1 = calcularDiferenciaDeConjuntos(conjuntoP, conjuntoQ);
  var diferencia = [];
  diferencia = diferencia.concat(diferencia1);

  //Ahora los de la Diferencia de B
  var conjuntoP = document.getElementById('ConjuntoB').value.split(',');
  var conjuntoQ = document.getElementById('ConjuntoA').value.split(',');

  // Calcular la Diferencia de conjuntos
  var diferencia2 = calcularDiferenciaDeConjuntos(conjuntoP, conjuntoQ);
  diferencia = diferencia.concat(diferencia2);
  // Mostrar el resultado
  mostrarResultadoDiferencia(diferencia);
}
function calcularDiferenciaDeConjuntos(conjuntoP, conjuntoQ) {
  var diferencia = conjuntoP.filter(elemento => !conjuntoQ.includes(elemento));
  return diferencia;
}
function mostrarResultadoDiferencia(diferencia) {
  var resultadoContainer = document.getElementById('resultado');
  var cardinalidad = diferencia.length;
  resultadoContainer.innerHTML = '<strong>Diferencia de Conjuntos:</strong><br>' + 'Elementos: ' + JSON.stringify(diferencia) + '<br>' + 'Cardinalidad: ' + cardinalidad;
}

/* 
----------------------------Subconjunto--------------------------------
*/

function comprobarSubconjuntoA() {
  // Obtener los conjuntos ingresados por el usuario
  var conjuntoA = document.getElementById('ConjuntoA').value.split(',');
  var conjuntoB = document.getElementById('ConjuntoB').value.split(',');
  // Verificar si A es un subconjunto de B
  var esSubconjunto = esSubconjuntoDe(conjuntoA, conjuntoB);
  // Mostrar el resultado
  mostrarResultado(esSubconjunto);
}
function comprobarSubconjuntoB() {
  // Obtener los conjuntos ingresados por el usuario
  var conjuntoA = document.getElementById('ConjuntoA').value.split(',');
  var conjuntoB = document.getElementById('ConjuntoB').value.split(',');
  // Verificar si B es un subconjunto de A
  var esSubconjuntoInverso = esSubconjuntoDe(conjuntoB, conjuntoA);
  // Mostrar el resultado
  mostrarResultadoInverso(esSubconjuntoInverso);
}
function mostrarResultadoInverso(esSubconjuntoInverso) {
  var resultadoContainer = document.getElementById('resultado');
  resultadoContainer.innerHTML = esSubconjuntoInverso
    ? 'B es un subconjunto de A'
    : 'B no es un subconjunto de A';
  if (esSubconjuntoInverso) {
    var cardinalidadA = document.getElementById('ConjuntoA').value.split(',').length;
    var cardinalidadB = document.getElementById('ConjuntoB').value.split(',').length;
    resultadoContainer.innerHTML += '<br>Cardinalidad de A: ' + cardinalidadA;
    resultadoContainer.innerHTML += '<br>Cardinalidad de B: ' + cardinalidadB;
  }
}

function mostrarResultado(esSubconjunto) {
  var resultadoContainer = document.getElementById('resultado');
  resultadoContainer.innerHTML = esSubconjunto
    ? 'A es un subconjunto de B'
    : 'A no es un subconjunto de B';
  if (esSubconjunto) {
    var cardinalidadA = document.getElementById('ConjuntoA').value.split(',').length;
    var cardinalidadB = document.getElementById('ConjuntoB').value.split(',').length;
    resultadoContainer.innerHTML += '<br>Cardinalidad de A: ' + cardinalidadA;
    resultadoContainer.innerHTML += '<br>Cardinalidad de B: ' + cardinalidadB;
  }
}
function esSubconjuntoDe(conjuntoA, conjuntoB) {
  return conjuntoA.every(elemento => conjuntoB.includes(elemento));
}

/* 
----------------------------ConjuntoPotencia--------------------------------
*/

function calcularConjuntoPotencia() {
  // Obtener el conjunto ingresado por el usuario
  var conjuntoE = document.getElementById('ConjuntoE').value.split(',');
  // Calcular el conjunto potencia
  var potencia = calcularPotenciaDeConjunto(conjuntoE);
  // Mostrar el resultado
  mostrarResultadoPotencia(potencia);
}
function calcularPotenciaDeConjunto(conjunto) {
  var potencia = [[]];
  for (var i = 0; i < conjunto.length; i++) {
    var currentElement = conjunto[i];
    var tempSubset = [];
    for (var j = 0; j < potencia.length; j++) {
      var subset = potencia[j].slice();
      subset.push(currentElement);
      tempSubset.push(subset);
    }
    potencia = potencia.concat(tempSubset);
  }
  return potencia;
}
function mostrarResultadoPotencia(potencia) {
  var resultadoContainer = document.getElementById('resultado');
  var cardinalidad = potencia.length;
  resultadoContainer.innerHTML = '<strong>Conjunto Potencia:</strong><br>' + 'Elementos: ' + JSON.stringify(potencia) + '<br>' + 'Cardinalidad: ' + cardinalidad;
}

/* 
----------------------------Relaciones--------------------------------
*/

function calcularProductoCruz() {
  // Obtener el conjunto ingresado por el usuario
  var ConjuntoA = document.getElementById("ConjuntoA").value.split(',');
  var ConjuntoB = document.getElementById("ConjuntoB").value.split(',');

  // Calcular el conjunto potencia
  var ProductoCruz = CalcularProductoCruz(ConjuntoA, ConjuntoB);


  mostrarResultadoProductoCruz(ProductoCruz);
}
function CalcularProductoCruz(conjuntoA, conjuntoB) {
  var productoCruzAB = [];
  for (var i = 0; i < conjuntoA.length; i++) {
    for (var j = 0; j < conjuntoB.length; j++) {
      productoCruzAB.push("(" + conjuntoA[i] + ", " + conjuntoB[j] + ")");
    }
  }
  return productoCruzAB;
}
function mostrarResultadoProductoCruz(cruz) {
  var resultadoContainer = document.getElementById('resultado');
  var cardinalidad = cruz.length;
  resultadoContainer.innerHTML = '<strong>Producto Cruz:</strong><br>' + 'Elementos: ' + JSON.stringify(cruz) + '<br>' + 'Cardinalidad: ' + cardinalidad;
}

/* 
----------------------------Relaciones--------------------------------
*/

function calcularRelaciones() {
  // Obtener el conjunto ingresado por el usuario
  var ConjuntoA = document.getElementById('ConjuntoA').value.split(',');
  var ConjuntoB = document.getElementById('ConjuntoA').value.split(',');

  // Calcular el conjunto potencia
  var Relacion = CalcularRelaciones(ConjuntoA, ConjuntoB);

  // Muestra el resultado
  mostrarResultadoRelaciones(Relacion);

}
function CalcularRelaciones(conjuntoA, conjuntoB) {
  var relacionBinaria = [];
  for (var i = 0; i < conjuntoA.length; i++) {
    for (var j = 0; j < conjuntoB.length; j++) {
      relacionBinaria.push("(" + conjuntoA[i] + ", " + conjuntoB[j] + ")");
   }
  }
  return relacionBinaria;
}
function mostrarResultadoRelaciones (Relacion) {
  var resultadoContainer = document.getElementById('resultado');
  var cardinalidad = Relacion.length;
  resultadoContainer.innerHTML = '<strong>Conjunto Potencia:</strong><br>' + 'Elementos: ' + JSON.stringify(Relacion) + '<br>' + 'Cardinalidad: ' + cardinalidad;
}


