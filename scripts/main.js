import locationsArray from '../locations.js';

let locationElement2 = document.getElementById("colorSelector1");



window.addEventListener('load', main);
locationElement2.addEventListener('click', colorFunction1);
locationElement2.addEventListener('touch', colorFunction1);

function main() {
    console.log('Page is fully loaded');
}


var target = locationsArray[Math.floor(Math.random()*locationsArray.length)].Name;

function colorFunction1() {

    document.getElementById("colorSelector1").innerHTML = target;
    let utterance = new SpeechSynthesisUtterance(response.colorComponent1 + target);
    speechSynthesis.speak(utterance);


}