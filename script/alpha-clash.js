
function handleKeyboardKeyUpEvent(event){
    // the key you pressed on keyboard 
    const playerPressed = event.key;
    // get the expected key to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // checked matched or not
    if(playerPressed === expectedAlphabet){
        // update score
        updateScore('current-score');

        // start a new round
        removeBackgoundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        // update life number
        updateLife('current-life');
    }
}
// capture keyboard key press 
document.addEventListener('keyup', handleKeyboardKeyUpEvent);

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