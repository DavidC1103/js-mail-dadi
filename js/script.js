const inputEmail = prompt('Per acceder al gioco inserisci la tua email')

const listEmail = [
    'davide@gmail.com',
    'andrea@gmail.com',
    'giggi@gmail.com',
    'peppe@gmail.com',
    'ciccio@gmail.com'
]



for(let i = 0; i < listEmail.length; i++){
    
    const error = document.getElementById('outputError');
    const confirm = document.getElementById('outputConfirm')
    let user = document.getElementById('tu')
    let npc = document.getElementById('npc')
    
    if(inputEmail === listEmail[i]){

        confirm.innerHTML = `
        Hai accesso al gioco 
        <br>
        Buon divertimento!
        `;

        error.remove()

        user.innerHTML = Math.floor(Math.random( ) * 7 )
        npc.innerHTML = Math.floor(Math.random( ) * 7 )
        

    }else{
        error.innerHTML = `
        L'email che hai inserito non esiste nel nostro database <br>
        Non hai accesso al gioco
        <br>
        Riaggiorna la pagina
        `;

        confirm.remove()
    }

}