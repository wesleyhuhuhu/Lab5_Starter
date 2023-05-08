// expose.js

window.addEventListener('DOMContentLoaded', init);

function hornselect() {
  var selected = document.getElementById("horn-select");
  var selectedValue = selected.options[selected.selectedIndex].value;
  if (selectedValue == "air-horn") {
    document.querySelector('img').src="assets/images/air-horn.svg";
    document.querySelector('audio').src="assets/audio/air-horn.mp3";
  }
  else if (selectedValue == "car-horn"){
    document.querySelector('img').src="assets/images/car-horn.svg";
    document.querySelector('audio').src="assets/audio/car-horn.mp3";
  }
  else { //party horn
    document.querySelector('img').src="assets/images/party-horn.svg";
    document.querySelector('audio').src="assets/audio/party-horn.mp3";
  }
}

function play() {
  document.querySelector('audio').play();
  var selected = document.getElementById("horn-select");
  var selectedValue = selected.options[selected.selectedIndex].value;
  console.log(selectedValue);
  if (selectedValue == "party-horn") {
    confetti();
  }
}

function confetti() {
  console.log("here");
  const jsConfetti = new JSConfetti();
  jsConfetti.addConfetti();
}

function volume() {
  var vol = document.getElementById('volume').value;
  document.querySelector('audio').volume = ("0." + vol);
  var selector = document.querySelectorAll('img');
  if (vol == 0) {
    selector[1].src="assets/icons/volume-level-0.svg"
  }
  else if (vol <= 33){
    selector[1].src="assets/icons/volume-level-1.svg"
  }
  else if (vol <= 67){
    selector[1].src="assets/icons/volume-level-2.svg"
  }
  else {
    selector[1].src="assets/icons/volume-level-3.svg"
  }
}

function init() {
  // TODO
  document.getElementById('horn-select').addEventListener('change', hornselect);
  document.querySelector('button').addEventListener("click", play);
  document.getElementById("volume").addEventListener('change', volume);
}