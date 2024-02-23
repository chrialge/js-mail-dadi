console.log('ciao');

// variabile per email
const elementMail = document.getElementById("email");



const elementContainer =document.getElementById('section_mail')
// creo la mia array di email
const listEmail = ['pippo@gmail.com', 'pluto@gmail.com', 'gennaro@gmail.com', 'geronimo@libero.it', 'stilton@libero.it'];

// variabile di markup e di una variabile booleana
let markupVerify 
let markupCancel 
let trovato = false


// chiamare il form e farlo funzionare quando clicco sul bottone
document.getElementById('mail').addEventListener('submit',function(e){
    e.preventDefault();

    // prendo il valore di email e la racchiudo in una variabile
    const userMail = elementMail.value;

    // ciclo per vedere se esiste nella mia array la mail
    for (let index = 0; index < listEmail.length; index++) {
        const element = listEmail[index];

        // se viene trovata il valore di trovato sara true
        if (userMail === listEmail[index]) {
           trovato = true

            break;
        }
    }
    console.log(trovato)

    // se trovato e true viene inserito questo
    if(trovato == true){
        markupVerify = `
            <div class="container box-standard bg-blue">
                <div id="positive">
                    <img src="./assets/img/99460655-pollice-in-su-mi-piace-sì-icona-vettore.jpg" alt="">
                    <h1>E stato convalidato la tua email</h1>
                </div>
            </div>
            `
            elementContainer.innerHTML = markupVerify;
    }else{//altrimenti viene inserito questo
        markupCancel= `
        <div class="container box-standard bg-red">
            <div id="positive">
                <img src="./assets/img/kisspng-thumb-signal-red-clip-art-thumbs-down-5b2158e1794d49.0799787115289120974969.jpg" alt="">
                <h1>La tua email non e convalidata</h1>
            </div>
        </div>
        `;
    elementContainer.innerHTML = markupCancel;

    }
    
})




// section dadi
// variiabile per selezionare una parte del html
const elementWinner = document.querySelector('.winner')
const elementYouResult = document.querySelector('.user_result')
const elementComResult = document.querySelector('.computer_result')

// quando il form dei daddi clicca su "clicca per far girare dadi"
document.getElementById('dadi').addEventListener('submit', function(e){
    e.preventDefault();

    // variabili per creare numeri random dei dai
    const userNumber = Math.floor(Math.random() * 6) + 1;
    const computerNumber = Math.floor(Math.random() * 6) + 1;
    console.log(userNumber, computerNumber);

    // inserire i risultati dei dadi
    elementComResult.innerHTML = computerNumber;
    elementYouResult.innerHTML = userNumber;

    // SE il numero del giocato e maggiore di quello del com stampa questo
    if (userNumber > computerNumber) {
        const markupWinner = `
        <img src="./assets/img/kisspng-award-cup-clip-art-cup-5ab4cdcc99db83.7328630715217986046302.jpg" alt="">
        <h1 class="your-color">WINNER: you</h1>
        `
        elementWinner.innerHTML = markupWinner;
        console.log('winner you')
    } else if(userNumber < computerNumber) {
        // ALTRIMENTI SE il numero del giocato e minore di quello del com stampa questo
        const markupWinner = `
        <img src="./assets/img/kisspng-award-cup-clip-art-cup-5ab4cdcc99db83.7328630715217986046302.jpg" alt="">
        <h1 class="com-color">WINNER: com</h1>
        `
        elementWinner.innerHTML = markupWinner;
        console.log('winner com');
    }else{
        // ALTRIMENTI stampa questo
        const markupWinner = `
        <img src="./assets/img/you-lose-black-stamp-sticker-260nw-1318551647.webp" alt="">
        <h1 class="lose-color">loser</h1>
        `
        elementWinner.innerHTML = markupWinner;
        console.log('lose')
    }


})


