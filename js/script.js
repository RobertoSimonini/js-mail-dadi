// console.log('OK JS');

/*
   ? ESERCIZIO 1 - Gioco dei dadi
    Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
    Stabilire il vincitore, in base a chi fa il punteggio più alto.
    Stampiamo in pagina i due tiri e il risultato
    -----------------------------------------------------------------
*/


// Prendo l'elemento del DOM 
const winner = document.getElementById('winner');
const btnGenerate = document.getElementById('generate');

// Preparo la costante Random 
const randomPc = Math.random();
const randomUser = Math.random();

// Preparo il numero Random da 1 a 6 del PC 
const pcResult = Math.floor(randomPc * 6) + 1;

// Preparo il numero random da 1 a 6 dell'utente 
const userResult = Math.floor(randomUser * 6) + 1;

let finalResult = '';
let content = '';

btnGenerate.addEventListener('click', function(){
    if (pcResult > userResult) {
        content = 'il pc ha vinto ;(';
    } else if (pcResult < userResult) {
        content = 'hai vinto!!! :) ';
    } else {
        content = 'tu e il computer avete pareggiato.';
    };

    finalResult = `Hai generato ${userResult}, il computer ha generato ${pcResult}, ${content}`;
    
    winner.innerHTML = finalResult;
});


// -------------------------------------------------------------------------

/*
   ? ESERCIZIO 2 - Finta Login
    !Inventa una lista di email autorizzate
    !Chiedi all’utente la sua email, con un piccolo form.
    !controlla che sia nella lista di chi può accedere,
    !stampa un messaggio appropriato sull’esito del controllo.

    Prima di partire a scrivere codice poniamoci qualche domanda:
    Che ci sia un array da qualche parte?
    Cosa devo controllare esattamente?
*/
// -------------------------------------------------------------------------


// Preapto le costanti delle mail autorizzate e prendo gli emlementi dal Dom
const emails = ['pippo@gmail.com', 'ciccio@gmail.com', 'fiore@gmail.com'];
const messageElement = document.getElementById('message');
const emailElement = document.getElementById('email');
const btnElement = document.getElementById('login');


btnElement.addEventListener("click", function(){
    // Recupero il valore interno all'input 
    const emailValue = emailElement.value;

    //! Validation
    if (!emailValue) {
         alert('Insert valid values!');
         return;
    }

    // Controllo che la sua email sia autorizzata

    if
    ((emailValue === emails[0]) || (emailValue === emails[1]) || (emailValue === emails[2])) {
        messageElement.innerText = ('Sei autorizzato ad accedere!');
    }
    else {
        messageElement.innerText = ('Non sei autorizzato ad accedere!');
        return;
    }  
});

