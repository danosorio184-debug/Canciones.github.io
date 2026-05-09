const canciones = [
  "canciones/「NIGHT DANCER」 (COVER ESPAÑOL) - imase - 【Ssac Tellme】.mp3",
  "canciones/Chayanne - Torero.mp3",
  "canciones/Escape From the City [Live].mp3",
  "canciones/Esteman - El Distractor.mp3",
  "canciones/Fist Bump.mp3",
  "canciones/Gente de Zona - La Gozadera (Official Video) ft. Marc Anthony.mp3",
  "canciones/Juanes - La Camisa Negra (Lyricsletra).mp3",
  "canciones/King Gnu - AIZO.mp3",
  "canciones/Luffy Gear 5 - Tic Tic Tac [ AMV ] - One piece.mp3",
  "canciones/OTONOKE (Merengue ver.) - Tricker.mp3"
];

let indice = 0;
const player = document.getElementById("player");
const lista = document.getElementById("lista");

player.src = canciones[indice];

canciones.forEach((cancion, i) => {
  const item = document.createElement("li");
  item.textContent = `Canción ${i+1}`;
  item.onclick = () => {
    indice = i;
    player.src = canciones[indice];
    player.play();
  };
  lista.appendChild(item);
});

function siguiente() {
  indice = (indice + 1) % canciones.length;
  player.src = canciones[indice];
  player.play();
}

function anterior() {
  indice = (indice - 1 + canciones.length) % canciones.length;
  player.src = canciones[indice];
  player.play();
}
