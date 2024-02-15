
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
        // 1. get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        // 2. increase the score by 1
        const newScore = currentScore + 1;
        // 3. show the update score
        currentScoreElement.innerText = newScore;
        
        // start a new round
        removeBackgoundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        // update life number
        // 1. get the current life number
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        // 2. reduce the life count 
        const newLife = currentLife - 1;
        // 3. show the update life number
        currentLifeElement.innerText = newLife;
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