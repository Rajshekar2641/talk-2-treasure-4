import LoactionsArray from '../locations.js';

window.addEventListener('load', main);
let synth = window.speechSynthesis;
let coloringBox1 = document.getElementById("colorSelector1");
// let coloringBox2 = document.getElementById("colorSelector2");


function main() {
    console.log('Page is fully loaded');}

window.addEventListener('load', main);
coloringBox1.addEventListener('click', onClickSquareBox1);
coloringBox1.addEventListener('touch', onClickSquareBox1);
// coloringBox2.addEventListener('click', onClickSquareBox2);
// coloringBox2.addEventListener('touch', onClickSquareBox2);





async function  onClickSquareBox1() {
   location=LoactionsArray[0];
   console.log(location);
   let output = "Treasure ready: ";
    document.getElementById("colorSelector1").innerHTML = output;
    let utterance = new SpeechSynthesisUtterance(output);
    speechSynthesis.speak(utterance);
    
}

