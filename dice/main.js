const dice = document.getElementById('dice');
const result = document.getElementById('result');
const play = document.getElementById('play');

let hod = 225;
let hody = [];
let timer = false;

function animace() {

    hod = Math.ceil(Math.random() * 6);
    dice.src = `img/dice.gif`;
}

play.addEventListener('click', function () {

    if (!timer) {

        timer = setInterval(animace, 100);

        play.innerText = 'STOP'


    } 
    else {
        clearInterval(timer);

        timer = false;

        hody.push(hod);

        result.innerHTML = statistika();

        play.innerText = 'ROLL';
    }
})


function sum() {
    let suma = 0;
    hody.forEach((value) => {
        suma += value;
    })
    return suma;
}

function statistika() {
    let vypis = `<h3>Current throw: ${hod}</h3>`;
    vypis += `<p>Numbers of tries: ${hody.length}</p>`;
    return vypis;
}

function vyhra() {
    if (hod == 6) {
        dice.src = `img/kosktka1.png`;
    }
}