// console.log('OK JS');

/*
   ? ESERCIZIO 1 - Gioco dei dadi
    Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
    Stabilire il vincitore, in base a chi fa il punteggio più alto.
    Stampiamo in pagina i due tiri e il risultato
    -----------------------------------------------------------------
   ? ESERCIZIO 2 - Finta Login
    Inventa una lista di email autorizzate
    Chiedi all’utente la sua email, con un piccolo form.
    controlla che sia nella lista di chi può accedere,
    stampa un messaggio appropriato sull’esito del controllo.
    Prima di partire a scrivere codice poniamoci qualche domanda:
    Che ci sia un array da qualche parte?
    Cosa devo controllare esattamente?
*/


// Prendo l'elemento del DOM 
const winner = document.getElementById('winner');

// Preparo la costante Random 
const random = Math.random();

// Preparo il numero Random da 1 a 6 del PC 
let pcResult = Math.floor(random * 6) + 1;
// console.log(pcResult);