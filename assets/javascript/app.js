var audio = new Audio("betteraudio.mp3");
  audio.volume = 0.5;
  audio.loop = true;
document.onclick = function() {
  audio.play();
}
