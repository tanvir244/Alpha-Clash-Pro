// ======
function hideElementById(hideSection){
    const hiddenSection = document.getElementById(hideSection);
    hiddenSection.classList.add('hidden');   
}
function showElementById(showSection){
    const showingSection = document.getElementById(showSection);
    showingSection.classList.remove('hidden');
}

// ======
function setBackgoundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function removeBackgoundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

// ======
function updateScore(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const elementNumber = parseInt(elementText);
    const newScore = elementNumber + 1;
    element.innerText = newScore; 
}
function updateLife(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const elementNumber = parseInt(elementText);
    const newScore = elementNumber - 1;
    element.innerText = newScore;
}

// ======
function getARandomAlphabet(){
    // create an Alphabet Array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetArray = alphabetString.split('');
    // get a random index between 0-25
    const randomNumber = Math.floor(Math.random() * 25) + 1;
    // random Alphabet
    const randomAlphabet = alphabetArray[randomNumber];
    return randomAlphabet;
}
