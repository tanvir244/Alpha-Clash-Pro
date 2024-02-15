
function continueGame(){
    const alphabet = getARandomAlphabet();
    // set randomly generated alphabet to the UI
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
}
function play(){
   hideElementById('home-screen');
   showElementById('play-ground');
   continueGame();
}