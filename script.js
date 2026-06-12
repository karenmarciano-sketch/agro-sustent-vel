let plantas = 0;

const tipos = [
  "🌱",
  "🌾",
  "🌻",
  "🌿",
  "🍀"
];

function plantar(){

  plantas++;

  document.getElementById("contador").innerText =
    "Plantas cultivadas: " + plantas;

  let planta =
    tipos[Math.floor(Math.random() * tipos.length)];

  document.getElementById("jardim").innerHTML += planta;

}
