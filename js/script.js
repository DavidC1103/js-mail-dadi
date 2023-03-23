const inputEmail = prompt('Inserisci la tua email')
console.log(inputEmail)

const listEmail = [
    'davide@gmail.com',
    'andrea@gmail.com',
    'giggi@gmail.com',
    'peppe@gmail.com',
    'ciccio@gmail.com'
]




for(let i = 0; i < listEmail.length; i++){
    
    const error = document.getElementById('outputError');



    if(inputEmail === listEmail[i]){
        console.log(inputEmail)

    }else if(inputEmail != listEmail[i]){
        console.log(inputEmail)
        error.innerHTML = `
        L'email che hai inserito non esiste nel nostro database`
    }

}