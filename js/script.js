const inputEmail = prompt('Per acceder al gioco inserisci la tua email')

const listEmail = [
    'davide@gmail.com',
    'andrea@gmail.com',
    'giggi@gmail.com',
    'peppe@gmail.com',
    'ciccio@gmail.com'
]


const error = document.getElementById('outputError');
const confirm = document.getElementById('outputConfirm')
const btn = document.getElementById('btn')
let user = document.getElementById('tu')
let npc = document.getElementById('npc')
let winner = document.getElementById('winner')
let emailTrovata = 0

for(let i = 0; i < listEmail.length; i++){
    
    if(inputEmail === listEmail[i]){
        emailTrovata = 1    
    }
}

if(emailTrovata === 1){

    confirm.innerHTML = `
    Hai accesso al gioco 
    <br>
    Buon divertimento!
    `;
    
    user.innerHTML = Math.floor(Math.random( ) * 7 )
    npc.innerHTML = Math.floor(Math.random( ) * 7 )

    if(user > npc){
        winner.innerHTML = `TU HAI VINTO!`
    }else{
        winner.innerHTML = `NPC HA VINTO!`

    }
}else{
    error.innerHTML = `
    L'email che hai inserito non esiste nel nostro database <br>
    Non hai accesso al gioco
    <br>
    Riaggiorna la pagina
    `;
}

