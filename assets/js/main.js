console.log('ciao');

// variabile per email
const elementMail = document.getElementById("email");
console.log(elementMail);


const elementContainer =document.getElementById('section_mail')
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
            
            const markupVerify = `
            <div class="container box-standard bg-blue">
                <div id="positive">
                    <h1>E stato convalidato la tua email</h1>
                </div>
            </div>
            `
            elementContainer.innerHTML = markupVerify;

        }
    }

})


