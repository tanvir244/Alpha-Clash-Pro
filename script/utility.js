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
function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const value = parseInt(elementText);
    return value; 
}
function setElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

// ======
function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
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
