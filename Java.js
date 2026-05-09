const canciones = [
  { nombre: "NIGHT DANCER (Cover Español)", archivo: "canciones/「NIGHT DANCER」 (COVER ESPAÑOL) - imase - 【Ssac Tellme】.mp3" },
  { nombre: "Chayanne - Torero", archivo: "canciones/Chayanne - Torero.mp3" },
  { nombre: "Escape From the City [Live]", archivo: "canciones/Escape From the City [Live].mp3" },
  { nombre: "Esteman - El Distractor", archivo: "canciones/Esteman - El Distractor.mp3" },
  { nombre: "Fist Bump", archivo: "canciones/Fist Bump.mp3" },
  { nombre: "La Gozadera - Gente de Zona ft. Marc Anthony", archivo: "canciones/Gente de Zona - La Gozadera (Official Video) ft. Marc Anthony.mp3" },
  { nombre: "Juanes - La Camisa Negra", archivo: "canciones/Juanes - La Camisa Negra (Lyricsletra).mp3" },
  { nombre: "King Gnu - AIZO", archivo: "canciones/King Gnu - AIZO.mp3" },
  { nombre: "Luffy Gear 5 - Tic Tic Tac", archivo: "canciones/Luffy Gear 5 - Tic Tic Tac [ AMV ] - One piece.mp3" },
  { nombre: "OTONOKE (Merengue ver.) - Tricker", archivo: "canciones/OTONOKE (Merengue ver.) - Tricker.mp3" }
];

let indice = 0;
const player = document.getElementById("player");
const lista = document.getElementById("lista");

// Cargar la primera canción
player.src = canciones[indice].archivo;

// Mostrar lista con nombres reales
canciones.forEach((cancion, i) => {
  const item = document.createElement("li");
  item.textContent = cancion.nombre; // aquí aparece el nombre real
  item.onclick = () => {
    indice = i;
    player.src = canciones[indice].archivo;
    player.play();
  };
  lista.appendChild(item);
});

function siguiente() {
  indice = (indice + 1) % canciones.length;
  player.src = canciones[indice].archivo;
  player.play();
}

function anterior() {
  indice = (indice - 1 + canciones.length) % canciones.length;
  player.src = canciones[indice].archivo;
  player.play();
}
