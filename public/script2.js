let coches = {};

// fetch('/cars')
//   .then(response => response.json())
//   .then(data =>{ coches = data.cars; });




// function agregarElementoLista2() {
//     var CPrimerCoche = coches[1].driver;
//     var elementoLista2 = document.createElement('p');
//     elementoLista2.textContent = CPrimerCoche;
//     elementoLista2.style.color = "red";
//     document.getElementById('contain').appendChild(elementoLista2);
//     console.log(CPrimerCoche)
// }




document.addEventListener('DOMContentLoaded', function() {
  agregarElementoLista2()
  agregarElementoLista3()
  agregarElementoLista4()
  agregarElementoLista5()
  agregarElementoLista6()
  agregarElementoLista7()
  agregarElementoLista8()
  agregarElementoLista9()
  agregarElementoLista10()
  agregarElementoLista11()
  agregarElementoLista12()
  agregarElementoLista13()
  agregarElementoLista14()
  agregarElementoLista15()
  agregarElementoLista16()
  agregarElementoLista17()
  agregarElementoLista18()
  agregarElementoLista19()
  agregarElementoLista20()
  agregarElementoLista21()
  agregarElementoLista22()
  agregarElementoLista23()
  agregarElementoLista24()
  agregarElementoLista25()
  agregarElementoLista26()
  agregarElementoLista27()
  agregarElementoLista28()
  agregarElementoLista29()
  agregarElementoLista30()
  agregarElementoLista31()
  agregarElementoLista32()
  agregarElementoLista33()
  agregarElementoLista34()
  agregarElementoLista35()
  agregarElementoLista36()
  agregarElementoLista37()
  agregarElementoLista38()
  agregarElementoLista39()
  agregarElementoLista40()
  agregarElementoLista41()
  agregarElementoLista42()
  agregarElementoLista43()
  agregarElementoLista44()
  agregarElementoLista45()
  agregarElementoLista46()
  agregarElementoLista47()
  agregarElementoLista48()
  agregarElementoLista49()
  agregarElementoLista50()
  agregarElementoLista51()
  agregarElementoLista52()
  agregarElementoLista53()
  agregarElementoLista54()
  agregarElementoLista55()
  agregarElementoLista56()
  agregarElementoLista57()
  agregarElementoLista58()
  agregarElementoLista59()
  agregarElementoLista60()
  agregarElementoLista61()
  agregarElementoLista62()
  agregarElementoLista63()
  agregarElementoLista64()
  agregarElementoLista65()
  agregarElementoLista66()
  agregarElementoLista67()
  agregarElementoLista68()
  agregarElementoLista69()
  agregarElementoLista70()
  agregarElementoLista71()
  agregarElementoLista72()
  agregarElementoLista73()
  agregarElementoLista74()
  agregarElementoLista75()
  agregarElementoLista76()
  agregarElementoLista77()
  agregarElementoLista78()
});

async function agregarElementoLista2() {
    const response = await  fetch('/cars')
    const data = await response.json()
    const coches = data.cars;
  console.log(coches)
    var CPrimerCoche = coches[0].make;
    var elementoLista2 = document.createElement('h1');
    elementoLista2.textContent = CPrimerCoche;
    document.getElementById('container').appendChild(elementoLista2);
    console.log(CPrimerCoche)
}

async function agregarElementoLista3() {
  const response = await  fetch('/cars')
  const data = await response.json()
  const coches = data.cars;
console.log(coches)
  var CPrimerCoche = coches[0].make;
  var elementoLista2 = document.createElement('div');
  elementoLista2.className = "car-info";
  elementoLista2.id = "info";
  document.getElementById('container').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function agregarElementoLista4() {
  const response = await  fetch('/cars')
  const data = await response.json()
  const coches = data.cars;
console.log(coches)
  var CPrimerCoche = coches[0].image;
  var elementoLista2 = document.createElement('img');
  elementoLista2.className = "car-image";
  elementoLista2.src = CPrimerCoche;
  document.getElementById('info').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function agregarElementoLista5() {
  const response = await  fetch('/cars')
  const data = await response.json()
  const coches = data.cars;
console.log(coches)
  var CPrimerCoche = coches[0].make;
  var elementoLista2 = document.createElement('div');
  elementoLista2.className = "car-details";
  elementoLista2.id = "detalles";
  document.getElementById('info').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function agregarElementoLista6() {
  const response = await  fetch('/cars')
  const data = await response.json()
  const coches = data.cars;
console.log(coches)
  var CPrimerCoche = coches[0].model;
  var elementoLista2 = document.createElement('h2');
  elementoLista2.textContent = CPrimerCoche;
  document.getElementById('detalles').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function agregarElementoLista7() {
  const response = await  fetch('/cars')
  const data = await response.json()
  const coches = data.cars;
console.log(coches)
  var CPrimerCoche = coches[0].make;
  var elementoLista2 = document.createElement('div');
  elementoLista2.className = "category" ;
  elementoLista2.id = "categoria" ;
  document.getElementById('detalles').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function agregarElementoLista8() {
  const response = await  fetch('/cars')
  const data = await response.json()
  const coches = data.cars;
console.log(coches)
  var CPrimerCoche = coches[0].category;
  var elementoLista2 = document.createElement('h3');
  elementoLista2.textContent =  CPrimerCoche;
  document.getElementById('categoria').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function agregarElementoLista9() {
  const response = await  fetch('/cars')
  const data = await response.json()
  const coches = data.cars;
console.log(coches)
  var CPrimerCoche = coches[0].category;
  var elementoLista2 = document.createElement('ul');
  elementoLista2.id =  "ul";
  document.getElementById('categoria').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function agregarElementoLista10() {
  const response = await  fetch('/cars')
  const data = await response.json()
  const coches = data.cars;
console.log(coches)
  var CPrimerCoche = coches[0].info1;
  var elementoLista2 = document.createElement('li');
  elementoLista2.textContent =  CPrimerCoche;
  document.getElementById('ul').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function agregarElementoLista11() {
  const response = await  fetch('/cars')
  const data = await response.json()
  const coches = data.cars;
console.log(coches)
  var CPrimerCoche = coches[0].info2;
  var elementoLista2 = document.createElement('li');
  elementoLista2.textContent =  CPrimerCoche;
  document.getElementById('ul').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function agregarElementoLista12() {
  const response = await  fetch('/cars')
  const data = await response.json()
  const coches = data.cars;
console.log(coches)
  var CPrimerCoche = coches[0].info3;
  var elementoLista2 = document.createElement('li');
  elementoLista2.textContent =  CPrimerCoche;
  document.getElementById('ul').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}




async function agregarElementoLista13() {
  const response = await  fetch('/cars')
  const data = await response.json()
  const coches = data.cars;
console.log(coches)
  var CPrimerCoche = coches[1].make;
  var elementoLista2 = document.createElement('h1');
  elementoLista2.textContent = CPrimerCoche;
  document.getElementById('container1').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function agregarElementoLista14() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[1].make;
var elementoLista2 = document.createElement('div');
elementoLista2.className = "car-info";
elementoLista2.id = "info1";
document.getElementById('container1').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista15() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[1].image;
var elementoLista2 = document.createElement('img');
elementoLista2.className = "car-image";
elementoLista2.src = CPrimerCoche;
document.getElementById('info1').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista16() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[1].make;
var elementoLista2 = document.createElement('div');
elementoLista2.className = "car-details";
elementoLista2.id = "detalles1";
document.getElementById('info1').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista17() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[1].model;
var elementoLista2 = document.createElement('h2');
elementoLista2.textContent = CPrimerCoche;
document.getElementById('detalles1').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista18() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[1].make;
var elementoLista2 = document.createElement('div');
elementoLista2.className = "category" ;
elementoLista2.id = "categoria1" ;
document.getElementById('detalles1').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista19() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[1].category;
var elementoLista2 = document.createElement('h3');
elementoLista2.textContent =  CPrimerCoche;
document.getElementById('categoria1').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista20() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[1].category;
var elementoLista2 = document.createElement('ul');
elementoLista2.id =  "ul1";
document.getElementById('categoria1').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista21() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[1].info1;
var elementoLista2 = document.createElement('li');
elementoLista2.textContent =  CPrimerCoche;
document.getElementById('ul1').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista22() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[1].info2;
var elementoLista2 = document.createElement('li');
elementoLista2.textContent =  CPrimerCoche;
document.getElementById('ul1').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista23() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[1].info3;
var elementoLista2 = document.createElement('li');
elementoLista2.textContent =  CPrimerCoche;
document.getElementById('ul1').appendChild(elementoLista2);
console.log(CPrimerCoche)
}





async function agregarElementoLista24() {
  const response = await  fetch('/cars')
  const data = await response.json()
  const coches = data.cars;
console.log(coches)
  var CPrimerCoche = coches[2].make;
  var elementoLista2 = document.createElement('h1');
  elementoLista2.textContent = CPrimerCoche;
  document.getElementById('container2').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function agregarElementoLista25() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[2].make;
var elementoLista2 = document.createElement('div');
elementoLista2.className = "car-info";
elementoLista2.id = "info2";
document.getElementById('container2').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista26() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[2].image;
var elementoLista2 = document.createElement('img');
elementoLista2.className = "car-image";
elementoLista2.src = CPrimerCoche;
document.getElementById('info2').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista27() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[2].make;
var elementoLista2 = document.createElement('div');
elementoLista2.className = "car-details";
elementoLista2.id = "detalles2";
document.getElementById('info2').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista28() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[2].model;
var elementoLista2 = document.createElement('h2');
elementoLista2.textContent = CPrimerCoche;
document.getElementById('detalles2').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista29() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[2].make;
var elementoLista2 = document.createElement('div');
elementoLista2.className = "category" ;
elementoLista2.id = "categoria2" ;
document.getElementById('detalles2').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista30() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[2].category;
var elementoLista2 = document.createElement('h3');
elementoLista2.textContent =  CPrimerCoche;
document.getElementById('categoria2').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista31() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[2].category;
var elementoLista2 = document.createElement('ul');
elementoLista2.id =  "ul2";
document.getElementById('categoria2').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista32() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[2].info1;
var elementoLista2 = document.createElement('li');
elementoLista2.textContent =  CPrimerCoche;
document.getElementById('ul2').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista33() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[2].info2;
var elementoLista2 = document.createElement('li');
elementoLista2.textContent =  CPrimerCoche;
document.getElementById('ul2').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista34() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[2].info3;
var elementoLista2 = document.createElement('li');
elementoLista2.textContent =  CPrimerCoche;
document.getElementById('ul2').appendChild(elementoLista2);
console.log(CPrimerCoche)
}



async function agregarElementoLista35() {
  const response = await  fetch('/cars')
  const data = await response.json()
  const coches = data.cars;
console.log(coches)
  var CPrimerCoche = coches[3].make;
  var elementoLista2 = document.createElement('h1');
  elementoLista2.textContent = CPrimerCoche;
  document.getElementById('container3').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function agregarElementoLista36() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[3].make;
var elementoLista2 = document.createElement('div');
elementoLista2.className = "car-info";
elementoLista2.id = "info3";
document.getElementById('container3').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista37() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[3].image;
var elementoLista2 = document.createElement('img');
elementoLista2.className = "car-image";
elementoLista2.src = "imagenes/nissan.jpeg";
document.getElementById('info3').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista38() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[3].make;
var elementoLista2 = document.createElement('div');
elementoLista2.className = "car-details";
elementoLista2.id = "detalles3";
document.getElementById('info3').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista39() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[3].model;
var elementoLista2 = document.createElement('h2');
elementoLista2.textContent = CPrimerCoche;
document.getElementById('detalles3').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista40() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[3].make;
var elementoLista2 = document.createElement('div');
elementoLista2.className = "category" ;
elementoLista2.id = "categoria3" ;
document.getElementById('detalles3').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista41() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[3].category;
var elementoLista2 = document.createElement('h3');
elementoLista2.textContent =  CPrimerCoche;
document.getElementById('categoria3').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista42() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[3].category;
var elementoLista2 = document.createElement('ul');
elementoLista2.id =  "ul3";
document.getElementById('categoria3').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista43() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[3].info1;
var elementoLista2 = document.createElement('li');
elementoLista2.textContent =  CPrimerCoche;
document.getElementById('ul3').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista44() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[3].info2;
var elementoLista2 = document.createElement('li');
elementoLista2.textContent =  CPrimerCoche;
document.getElementById('ul3').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista45() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[3].info3;
var elementoLista2 = document.createElement('li');
elementoLista2.textContent =  CPrimerCoche;
document.getElementById('ul3').appendChild(elementoLista2);
console.log(CPrimerCoche)
}







async function agregarElementoLista46() {
  const response = await  fetch('/cars')
  const data = await response.json()
  const coches = data.cars;
console.log(coches)
  var CPrimerCoche = coches[4].make;
  var elementoLista2 = document.createElement('h1');
  elementoLista2.textContent = CPrimerCoche;
  document.getElementById('container4').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function agregarElementoLista47() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[4].make;
var elementoLista2 = document.createElement('div');
elementoLista2.className = "car-info";
elementoLista2.id = "info4";
document.getElementById('container4').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista48() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[4].image;
var elementoLista2 = document.createElement('img');
elementoLista2.className = "car-image";
elementoLista2.src = CPrimerCoche;
document.getElementById('info4').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista49() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[4].make;
var elementoLista2 = document.createElement('div');
elementoLista2.className = "car-details";
elementoLista2.id = "detalles4";
document.getElementById('info4').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista50() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[4].model;
var elementoLista2 = document.createElement('h2');
elementoLista2.textContent = CPrimerCoche;
document.getElementById('detalles4').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista51() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[4].make;
var elementoLista2 = document.createElement('div');
elementoLista2.className = "category" ;
elementoLista2.id = "categoria4" ;
document.getElementById('detalles4').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista52() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[4].category;
var elementoLista2 = document.createElement('h3');
elementoLista2.textContent =  CPrimerCoche;
document.getElementById('categoria4').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista53() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[4].category;
var elementoLista2 = document.createElement('ul');
elementoLista2.id =  "ul4";
document.getElementById('categoria4').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista54() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[4].info1;
var elementoLista2 = document.createElement('li');
elementoLista2.textContent =  CPrimerCoche;
document.getElementById('ul4').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista55() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[4].info2;
var elementoLista2 = document.createElement('li');
elementoLista2.textContent =  CPrimerCoche;
document.getElementById('ul4').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista56() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[4].info3;
var elementoLista2 = document.createElement('li');
elementoLista2.textContent =  CPrimerCoche;
document.getElementById('ul4').appendChild(elementoLista2);
console.log(CPrimerCoche)
}




async function agregarElementoLista57() {
  const response = await  fetch('/cars')
  const data = await response.json()
  const coches = data.cars;
console.log(coches)
  var CPrimerCoche = coches[5].make;
  var elementoLista2 = document.createElement('h1');
  elementoLista2.textContent = CPrimerCoche;
  document.getElementById('container5').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function agregarElementoLista58() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[5].make;
var elementoLista2 = document.createElement('div');
elementoLista2.className = "car-info";
elementoLista2.id = "info5";
document.getElementById('container5').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista59() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[5].image;
var elementoLista2 = document.createElement('img');
elementoLista2.className = "car-image";
elementoLista2.src = CPrimerCoche;
document.getElementById('info5').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista60() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[5].make;
var elementoLista2 = document.createElement('div');
elementoLista2.className = "car-details";
elementoLista2.id = "detalles5";
document.getElementById('info5').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista61() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[5].model;
var elementoLista2 = document.createElement('h2');
elementoLista2.textContent = CPrimerCoche;
document.getElementById('detalles5').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista62() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[5].make;
var elementoLista2 = document.createElement('div');
elementoLista2.className = "category" ;
elementoLista2.id = "categoria5" ;
document.getElementById('detalles5').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista63() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[5].category;
var elementoLista2 = document.createElement('h3');
elementoLista2.textContent =  CPrimerCoche;
document.getElementById('categoria5').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista64() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[5].category;
var elementoLista2 = document.createElement('ul');
elementoLista2.id =  "ul5";
document.getElementById('categoria5').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista65() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[5].info1;
var elementoLista2 = document.createElement('li');
elementoLista2.textContent =  CPrimerCoche;
document.getElementById('ul5').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista66() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[5].info2;
var elementoLista2 = document.createElement('li');
elementoLista2.textContent =  CPrimerCoche;
document.getElementById('ul5').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista67() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[5].info3;
var elementoLista2 = document.createElement('li');
elementoLista2.textContent =  CPrimerCoche;
document.getElementById('ul5').appendChild(elementoLista2);
console.log(CPrimerCoche)
}




async function agregarElementoLista68() {
  const response = await  fetch('/cars')
  const data = await response.json()
  const coches = data.cars;
console.log(coches)
  var CPrimerCoche = coches[6].make;
  var elementoLista2 = document.createElement('h1');
  elementoLista2.textContent = CPrimerCoche;
  document.getElementById('container6').appendChild(elementoLista2);
  console.log(CPrimerCoche)
}

async function agregarElementoLista69() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[6].make;
var elementoLista2 = document.createElement('div');
elementoLista2.className = "car-info";
elementoLista2.id = "info6";
document.getElementById('container6').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista70() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[6].image;
var elementoLista2 = document.createElement('img');
elementoLista2.className = "car-image";
elementoLista2.src = CPrimerCoche;
document.getElementById('info6').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista71() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[6].make;
var elementoLista2 = document.createElement('div');
elementoLista2.className = "car-details";
elementoLista2.id = "detalles6";
document.getElementById('info6').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista72() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[6].model;
var elementoLista2 = document.createElement('h2');
elementoLista2.textContent = CPrimerCoche;
document.getElementById('detalles6').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista73() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[6].make;
var elementoLista2 = document.createElement('div');
elementoLista2.className = "category" ;
elementoLista2.id = "categoria6" ;
document.getElementById('detalles6').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista74() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[6].category;
var elementoLista2 = document.createElement('h3');
elementoLista2.textContent =  CPrimerCoche;
document.getElementById('categoria6').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista75() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[6].category;
var elementoLista2 = document.createElement('ul');
elementoLista2.id =  "ul6";
document.getElementById('categoria6').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista76() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[6].info1;
var elementoLista2 = document.createElement('li');
elementoLista2.textContent =  CPrimerCoche;
document.getElementById('ul6').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista77() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[6].info2;
var elementoLista2 = document.createElement('li');
elementoLista2.textContent =  CPrimerCoche;
document.getElementById('ul6').appendChild(elementoLista2);
console.log(CPrimerCoche)
}

async function agregarElementoLista78() {
const response = await  fetch('/cars')
const data = await response.json()
const coches = data.cars;
console.log(coches)
var CPrimerCoche = coches[6].info3;
var elementoLista2 = document.createElement('li');
elementoLista2.textContent =  CPrimerCoche;
document.getElementById('ul6').appendChild(elementoLista2);
console.log(CPrimerCoche)
}