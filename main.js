console.log(" JS collegato")

//Lista mail degli invitati
const invitedEmails = [
    "bruno@hotmail.it",
    "luca@hotmail.it",
    "mario@hotmail.it",
    "andrea@hotmail.it",
    "luigi@hotmail.it"
];

// Chiedere la mail all'utente
const userMail = prompt("Inserisci la tua email");

//Controllo della mail
let isInvited = false;

//Apro un ciclo  con FOR
for (let i = 0; i < invitedEmails.length; i++) {
    if(invitedEmails[i] === userMail) {
        isInvited = true;
    }
}

