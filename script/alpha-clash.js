
function continueGame(){
    // generate a random alphabet
    const alphabet = getARandomAlphabet();

    // set randomly generated alphabet to the UI
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    
    // set background color
    setBackgoundColorById(alphabet); 
}
function play(){
   hideElementById('home-screen');
   showElementById('play-ground');
   continueGame();
}