

let randomNumber1 = Math.ceil(Math.random()*6);
let randomNumber2 = Math.ceil(Math.random()*6);

let imgP2 = document.getElementById('p2');
let imgP1 = document.getElementById('p1');
let winner = document.getElementById('winner');


imgP1.setAttribute('src',`./images/dice${randomNumber1}.png`);
imgP2.setAttribute('src', `./images/dice${randomNumber2}.png` );

winner.innerText = randomNumber1 > randomNumber2 ? 'Player 1' : randomNumber1 < randomNumber2 ? 'Player 2' : 'Draw';
