import chooseLocation from '../locations.js';

window.addEventListener('load', main);
let synth = window.speechSynthesis;
let coloringBox1 = document.getElementById("btnColor1");
let coloringBox2 = document.getElementById("btnColor2");
let device, location;

function main() {
    console.log('Page is fully loaded');
}
window.addEventListener('load', main);
coloringBox1.addEventListener('click', onClickSquareBox1);
coloringBox1.addEventListener('touch', onClickSquareBox1);
coloringBox2.addEventListener('click', onClickSquareBox2);
coloringBox2.addEventListener('touch', onClickSquareBox2);




async function  onClickSquareBox1() {
   chooseLocation=setOfLocation[0];
   let output = "Treasure ready: " + chooseLocation.name;
    document.getElementById("btnColor1").innerHTML = output;
    let speech = new SpeechSynthesisUtterance(output);
    synth.speak(speech);
    
}
