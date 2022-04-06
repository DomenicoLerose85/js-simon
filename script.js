
// Visualizzare in pagina 5 numeri casuali (in un range tra 1 e 100). 
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice 
// quanti e quali dei numeri da indovinare sono stati individuati.

// generatore numeri random

function generatorRandomNumber(min, max) {
    range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
}

// arrays per numeri creati dalla macchina e numeri inseriti dall'utente

let machineSequence = [];
let humanSequence = [];

// selezione start btn e funzione per consentire inizio gioco quando il btn viene cliccato

const startBtn = document.getElementById("start_btn");

function startGame() {
    startBtn.classList.add('hidden');
}
  
startBtn.addEventListener('click', startGame);

// funzione per generare i numeri random da 1 a 100
function numberGeneration() {
    for (i = 1; i <= 5; i++) {
        const randomNumbers = generatorRandomNumber(1, 100);
        console.log(randomNumbers);
        machineSequence.push(randomNumbers);
    }
    
}
numberGeneration();
console.log(machineSequence);

// countdown di 30 secondi

const timer = setInterval(myFunction, 5000);

function myFunction(){
    prompt('Inserisci i numeri precedentemente visualizzati sullo schermo');
}

// clearInterval(timer);
