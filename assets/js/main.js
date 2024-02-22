console.log('ciao');

// variabile per email
const elementMail = document.getElementById("email");
console.log(elementMail);

// creo la mia array di email
const listEmail = ['pippo@gmail.com', 'pluto@gmail.com', 'gennaro@gmail.com', 'geronimo@libero.it', 'stilton@libero.it'];
console.log(listEmail)

// chiamare il form e farlo funzionare quando clicco sul bottone
document.querySelector('form').addEventListener('submit',function(e){
    e.preventDefault();

    // prendo il valore di email e la racchiudo in una variabile
    const userMail = elementMail.value;
    console.log(userMail)
    
    for (let index = 0; index < listEmail.length; index++) {
        const element = listEmail[index];
        console.log(element)
        if (userMail == element) {
            prompt('ciao')
        }else{
            alert('ciao')
        }
    }

})