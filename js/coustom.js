function play(){
    const home = document.getElementById('home');
    home.classList.add('hidden');
    const gameSection = document.getElementById('game-section');
    gameSection.classList.remove('hidden');
    strtGame()
};

function strtGame(){
    const alphabet = rendomAlphaCreate();
 const getAlphabet = alphabet.toLocaleLowerCase();
 const getAlphabetId = document.getElementById('alphbet');
 getAlphabetId.innerText = getAlphabet;
 addBackgroundColorById(alphabet);
}
function rendomAlphaCreate(){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetArray = alphabet.split('');
    
    const rendomNumber = Math.random()*25;
    const indexNumber = Math.round(rendomNumber);
    const singelAlphabet = alphabetArray[indexNumber];
    return singelAlphabet;
};
function addBackgroundColorById(elimentId){
const eliment = document.getElementById(elimentId);
eliment.classList.add('bg-orange-400')
}
