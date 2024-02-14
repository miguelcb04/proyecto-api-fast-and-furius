document.addEventListener('DOMContentLoaded', function() {
  elemento1()
  elemento2()
  elemento3()
  elemento4()
  elemento5()
  elemento6()
  elemento7()
  elemento8()
  elemento9()
  elemento10()
  elemento11()
  elemento12()
  elemento13()
  elemento14()
  elemento15()
  elemento16()
  elemento17()
  elemento18()
  elemento19()
  elemento20()
  elemento21()
  elemento22()
  elemento23()
  elemento24()
  elemento25()
  elemento26()
  elemento27()
  elemento28()
  elemento29()
  elemento30()
  elemento31()
  elemento32()
  elemento33()
  elemento34()
  elemento35()
  elemento36()
  elemento37()
  elemento38()
  elemento39()
  elemento40()
  elemento41()
  elemento42()
  elemento43()
  elemento44()
  elemento45()
});



async function elemento1() {
  const response = await  fetch('/drivers')
  const data = await response.json()
  const conductores = data.drivers;
console.log(conductores)
  var CPrimerCoche = conductores[0];
  var elementoLista2 = document.createElement('div');
  elementoLista2.className = "character";
  elementoLista2.id = "caracter";
  document.getElementById('container').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function elemento2() {
  const response = await  fetch('/drivers')
  const data = await response.json()
  const conductores = data.drivers;
console.log(conductores)
  var CPrimerCoche = conductores[0].image;
  var elementoLista2 = document.createElement('img');
  elementoLista2.src = CPrimerCoche;
  document.getElementById('caracter').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function elemento3() {
  const response = await  fetch('/drivers')
  const data = await response.json()
  const conductores = data.drivers;
console.log(conductores)
  var CPrimerCoche = conductores[0];
  var elementoLista2 = document.createElement('div');
  elementoLista2.className = "character-details";
  elementoLista2.id = "detalles";
  document.getElementById('caracter').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function elemento4() {
  const response = await  fetch('/drivers')
  const data = await response.json()
  const conductores = data.drivers;
console.log(conductores)
  var CPrimerCoche = conductores[0].name;
  var elementoLista2 = document.createElement('h1');
  elementoLista2.textContent = CPrimerCoche;
  document.getElementById('detalles').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function elemento5() {
  const response = await  fetch('/drivers')
  const data = await response.json()
  const conductores = data.drivers;
console.log(conductores)
  var CPrimerCoche = conductores[0].alias;
  var elementoLista2 = document.createElement('p');
  elementoLista2.textContent = "Alias:" +CPrimerCoche;
  document.getElementById('detalles').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}



async function elemento6() {
  const response = await  fetch('/drivers')
  const data = await response.json()
  const conductores = data.drivers;
console.log(conductores)
  var CPrimerCoche = conductores[1];
  var elementoLista2 = document.createElement('div');
  elementoLista2.className = "character";
  elementoLista2.id = "caracter2";
  document.getElementById('container2').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function elemento7() {
  const response = await  fetch('/drivers')
  const data = await response.json()
  const conductores = data.drivers;
console.log(conductores)
  var CPrimerCoche = conductores[1].image;
  var elementoLista2 = document.createElement('img');
  elementoLista2.src = CPrimerCoche;
  document.getElementById('caracter2').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function elemento8() {
  const response = await  fetch('/drivers')
  const data = await response.json()
  const conductores = data.drivers;
console.log(conductores)
  var CPrimerCoche = conductores[1];
  var elementoLista2 = document.createElement('div');
  elementoLista2.className = "character-details";
  elementoLista2.id = "detalles2";
  document.getElementById('caracter2').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function elemento9() {
  const response = await  fetch('/drivers')
  const data = await response.json()
  const conductores = data.drivers;
console.log(conductores)
  var CPrimerCoche = conductores[1].name;
  var elementoLista2 = document.createElement('h1');
  elementoLista2.textContent = CPrimerCoche;
  document.getElementById('detalles2').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function elemento10() {
  const response = await  fetch('/drivers')
  const data = await response.json()
  const conductores = data.drivers;
console.log(conductores)
  var CPrimerCoche = conductores[1].alias;
  var elementoLista2 = document.createElement('p');
  elementoLista2.textContent = "Alias:" +CPrimerCoche;
  document.getElementById('detalles2').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}


async function elemento11() {
  const response = await  fetch('/drivers')
  const data = await response.json()
  const conductores = data.drivers;
console.log(conductores)
  var CPrimerCoche = conductores[2];
  var elementoLista2 = document.createElement('div');
  elementoLista2.className = "character";
  elementoLista2.id = "caracter3";
  document.getElementById('container3').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function elemento12() {
  const response = await  fetch('/drivers')
  const data = await response.json()
  const conductores = data.drivers;
console.log(conductores)
  var CPrimerCoche = conductores[2].image;
  var elementoLista2 = document.createElement('img');
  elementoLista2.src = CPrimerCoche;
  document.getElementById('caracter3').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function elemento13() {
  const response = await  fetch('/drivers')
  const data = await response.json()
  const conductores = data.drivers;
console.log(conductores)
  var CPrimerCoche = conductores[2];
  var elementoLista2 = document.createElement('div');
  elementoLista2.className = "character-details";
  elementoLista2.id = "detalles3";
  document.getElementById('caracter3').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function elemento14() {
  const response = await  fetch('/drivers')
  const data = await response.json()
  const conductores = data.drivers;
console.log(conductores)
  var CPrimerCoche = conductores[2].name;
  var elementoLista2 = document.createElement('h1');
  elementoLista2.textContent = CPrimerCoche;
  document.getElementById('detalles3').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function elemento15() {
  const response = await  fetch('/drivers')
  const data = await response.json()
  const conductores = data.drivers;
console.log(conductores)
  var CPrimerCoche = conductores[2].alias;
  var elementoLista2 = document.createElement('p');
  elementoLista2.textContent = "Alias:" +CPrimerCoche;
  document.getElementById('detalles3').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function elemento16() {
  const response = await  fetch('/drivers')
  const data = await response.json()
  const conductores = data.drivers;
console.log(conductores)
  var CPrimerCoche = conductores[3];
  var elementoLista2 = document.createElement('div');
  elementoLista2.className = "character";
  elementoLista2.id = "caracter4";
  document.getElementById('container4').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function elemento17() {
  const response = await  fetch('/drivers')
  const data = await response.json()
  const conductores = data.drivers;
console.log(conductores)
  var CPrimerCoche = conductores[3].image;
  var elementoLista2 = document.createElement('img');
  elementoLista2.src = CPrimerCoche;
  document.getElementById('caracter4').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function elemento18() {
  const response = await  fetch('/drivers')
  const data = await response.json()
  const conductores = data.drivers;
console.log(conductores)
  var CPrimerCoche = conductores[3];
  var elementoLista2 = document.createElement('div');
  elementoLista2.className = "character-details";
  elementoLista2.id = "detalles4";
  document.getElementById('caracter4').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function elemento19() {
  const response = await  fetch('/drivers')
  const data = await response.json()
  const conductores = data.drivers;
console.log(conductores)
  var CPrimerCoche = conductores[3].name;
  var elementoLista2 = document.createElement('h1');
  elementoLista2.textContent = CPrimerCoche;
  document.getElementById('detalles4').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function elemento20() {
  const response = await  fetch('/drivers')
  const data = await response.json()
  const conductores = data.drivers;
console.log(conductores)
  var CPrimerCoche = conductores[3].alias;
  var elementoLista2 = document.createElement('p');
  elementoLista2.textContent = "Alias:" +CPrimerCoche;
  document.getElementById('detalles4').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function elemento21() {
  const response = await  fetch('/drivers')
  const data = await response.json()
  const conductores = data.drivers;
console.log(conductores)
  var CPrimerCoche = conductores[4];
  var elementoLista2 = document.createElement('div');
  elementoLista2.className = "character";
  elementoLista2.id = "caracter5";
  document.getElementById('container5').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function elemento22() {
  const response = await  fetch('/drivers')
  const data = await response.json()
  const conductores = data.drivers;
console.log(conductores)
  var CPrimerCoche = conductores[4].image;
  var elementoLista2 = document.createElement('img');
  elementoLista2.src = CPrimerCoche;
  document.getElementById('caracter5').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function elemento23() {
  const response = await  fetch('/drivers')
  const data = await response.json()
  const conductores = data.drivers;
console.log(conductores)
  var CPrimerCoche = conductores[4];
  var elementoLista2 = document.createElement('div');
  elementoLista2.className = "character-details";
  elementoLista2.id = "detalles5";
  document.getElementById('caracter5').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function elemento24() {
  const response = await  fetch('/drivers')
  const data = await response.json()
  const conductores = data.drivers;
console.log(conductores)
  var CPrimerCoche = conductores[4].name;
  var elementoLista2 = document.createElement('h1');
  elementoLista2.textContent = CPrimerCoche;
  document.getElementById('detalles5').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function elemento25() {
  const response = await  fetch('/drivers')
  const data = await response.json()
  const conductores = data.drivers;
console.log(conductores)
  var CPrimerCoche = conductores[4].alias;
  var elementoLista2 = document.createElement('p');
  elementoLista2.textContent = "Alias:" +CPrimerCoche;
  document.getElementById('detalles5').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function elemento26() {
  const response = await  fetch('/drivers')
  const data = await response.json()
  const conductores = data.drivers;
console.log(conductores)
  var CPrimerCoche = conductores[5];
  var elementoLista2 = document.createElement('div');
  elementoLista2.className = "character";
  elementoLista2.id = "caracter6";
  document.getElementById('container6').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function elemento27() {
  const response = await  fetch('/drivers')
  const data = await response.json()
  const conductores = data.drivers;
console.log(conductores)
  var CPrimerCoche = conductores[5].image;
  var elementoLista2 = document.createElement('img');
  elementoLista2.src = CPrimerCoche;
  document.getElementById('caracter6').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function elemento28() {
  const response = await  fetch('/drivers')
  const data = await response.json()
  const conductores = data.drivers;
console.log(conductores)
  var CPrimerCoche = conductores[5];
  var elementoLista2 = document.createElement('div');
  elementoLista2.className = "character-details";
  elementoLista2.id = "detalles6";
  document.getElementById('caracter6').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function elemento29() {
  const response = await  fetch('/drivers')
  const data = await response.json()
  const conductores = data.drivers;
console.log(conductores)
  var CPrimerCoche = conductores[5].name;
  var elementoLista2 = document.createElement('h1');
  elementoLista2.textContent = CPrimerCoche;
  document.getElementById('detalles6').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function elemento30() {
  const response = await  fetch('/drivers')
  const data = await response.json()
  const conductores = data.drivers;
console.log(conductores)
  var CPrimerCoche = conductores[5].alias;
  var elementoLista2 = document.createElement('p');
  elementoLista2.textContent = "Alias:" +CPrimerCoche;
  document.getElementById('detalles6').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function elemento31() {
  const response = await  fetch('/drivers')
  const data = await response.json()
  const conductores = data.drivers;
console.log(conductores)
  var CPrimerCoche = conductores[6];
  var elementoLista2 = document.createElement('div');
  elementoLista2.className = "character";
  elementoLista2.id = "caracter7";
  document.getElementById('container7').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function elemento32() {
  const response = await  fetch('/drivers')
  const data = await response.json()
  const conductores = data.drivers;
console.log(conductores)
  var CPrimerCoche = conductores[6].image;
  var elementoLista2 = document.createElement('img');
  elementoLista2.src = CPrimerCoche;
  document.getElementById('caracter7').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function elemento33() {
  const response = await  fetch('/drivers')
  const data = await response.json()
  const conductores = data.drivers;
console.log(conductores)
  var CPrimerCoche = conductores[6];
  var elementoLista2 = document.createElement('div');
  elementoLista2.className = "character-details";
  elementoLista2.id = "detalles7";
  document.getElementById('caracter7').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function elemento34() {
  const response = await  fetch('/drivers')
  const data = await response.json()
  const conductores = data.drivers;
console.log(conductores)
  var CPrimerCoche = conductores[6].name;
  var elementoLista2 = document.createElement('h1');
  elementoLista2.textContent = CPrimerCoche;
  document.getElementById('detalles7').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function elemento35() {
  const response = await  fetch('/drivers')
  const data = await response.json()
  const conductores = data.drivers;
console.log(conductores)
  var CPrimerCoche = conductores[6].alias;
  var elementoLista2 = document.createElement('p');
  elementoLista2.textContent = "Alias:" +CPrimerCoche;
  document.getElementById('detalles7').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}