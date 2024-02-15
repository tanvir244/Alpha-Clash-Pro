
function handleKeyboardKeyUpEvent(event) {
    // the key you pressed on keyboard 
    const playerPressed = event.key;
    // get the expected key to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // checked matched or not
    if (playerPressed === expectedAlphabet) {
        // update score
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setElementValueById('current-score', updatedScore);

        // start a new round
        removeBackgoundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        // update life number
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setElementValueById('current-life', updatedLife);
        if (updatedLife === 0) {
            gameOver();
        }
    }
}
// capture keyboard key press 
document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame() {
    // generate a random alphabet
    const alphabet = getARandomAlphabet();

    // set randomly generated alphabet to the UI
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgoundColorById(alphabet);
}
function play() {
    // hide everything and show only the playground
    hideElementById('home-screen');
    showElementById('play-ground');
    hideElementById('final-score');

    // reset score and life
    setElementValueById('current-score', 0);
    setElementValueById('current-life', 5)

    continueGame();
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');

    // update final score 
    const lastScore = getTextElementValueById('current-score');
    setElementValueById('last-score', lastScore);

    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgoundColorById(currentAlphabet);
}