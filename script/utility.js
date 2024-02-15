
function hideElementById(hideSection){
    const hiddenSection = document.getElementById(hideSection);
    hiddenSection.classList.add('hidden');   
}
function showElementById(showSection){
    const showingSection = document.getElementById(showSection);
    showingSection.classList.remove('hidden');
}
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