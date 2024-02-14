const express = require('express')
const cors = require('cors')
const app = express()
const fs = require('fs')
const PORT = process.env.PORT ?? 3000

app.use(cors())
app.use(express.static('public'))

// app.get("/", (req, res) => {
//   res.send('Welcome to my Fast and Furious API! A work in progress indeed. Visit "/cars" for car data and "/drivers" for character data.')
// })

app.get("/cars", (req, res) => {
  let carData = JSON.parse(fs.readFileSync('cars.json', 'utf-8'))

  res.json(carData)
})

app.get('/drivers', (req, res) => {
  let driverData = JSON.parse(fs.readFileSync('drivers.json', 'utf-8'))

  res.json(driverData)
})




app.get("/cars/:id", (req, res) => {
  // Obtener el ID desde la URL
  const carId = parseInt(req.params.id);

  // Leer los datos del archivo cars.json
  let carData = JSON.parse(fs.readFileSync('cars.json', 'utf-8'));
  let coches = carData.cars
  // Buscar el carro con el ID correspondiente
  const selectedCar = coches.find(car => car.id === carId);

  if (selectedCar) {
    // Si se encuentra el carro, enviarlo como respuesta
    res.json(selectedCar);
  } else {
    // Si no se encuentra el carro, enviar un mensaje de error
    res.status(404).json({ error: "Car not found" });
  }
});


app.listen(PORT, () => {
  console.log("Server running on port 3000");
})

let carData = JSON.parse(fs.readFileSync('cars.json', 'utf-8'));
let coches = carData.cars;

function agregarElementoLista2() {
    var CPrimerCoche = coches[1].driver;
    var elementoLista2 = document.createElement('p');
    elementoLista2.textContent = CPrimerCoche;
    elementoLista2.style.color = "red";
    document.getElementById('contains').appendChild(elementoLista2);
    console.log(CPrimerCoche)
}