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
let gameWinUser = 0 
let gameWinNpc = 0
let outputGameUser = document.getElementById('gameUser')
let outputGameNpc = document.getElementById('gameNpc')

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
  
}else{
    error.innerHTML = `
    L'email che hai inserito non esiste nel nostro database <br>
    Non hai accesso al gioco
    <br>
    Riaggiorna la pagina
    `;
    btn.remove()
}
btn.addEventListener('click', function(){
    let userNumber =  Math.floor(Math.random( ) * 7) 
    let npcNumber = Math.floor(Math.random( ) * 7) 
    user.innerHTML = userNumber
    npc.innerHTML = npcNumber



    if(userNumber > npcNumber){
        winner.innerHTML = `TU HAI VINTO!`;
        gameWinUser++;
        outputGameUser.innerHTML = gameWinUser; 
    }else if(userNumber === npcNumber){
        winner.innerHTML = `AVETE PAREGGIATO!` 
    }else{
        winner.innerHTML = `NPC HA VINTO!`
        gameWinNpc++;  
        outputGameNpc.innerHTML = gameWinNpc; 
    }
}) 




