'use strict'

let answer = '';
let color = '';

function greetUser() {
    alert('Hello adventurer, Welcome to our escape rooms!');
}

function promptUser() {
    answer = prompt('Which adventure would you prefer? Desert, Magic, or Wonderland?');
}

function selectColor() {
    let color = '';
    if(answer.toLowerCase() === 'desert'){
        alert('Get ready to take on the Pharoh in our pyramid themed escape room!');
        color = 'yellow';
    }
    else if(answer.toLowerCase() === 'magic'){
        alert('Come join us at a school for witchcraft and wizardry, and enjoy a fun escape room!');
        color = 'purple';
    }
    else if(answer.toLowerCase() === 'wonderland'){
        alert('Join us on an adventure through a twist of a wonderland, in an exciting and challenging escape room!');
        color = 'green';
    }
    else{
        alert('Check out our fun and enjoyable adventures!');
        color = 'blue';
    };
    document.body.style.color = color;
};

function Rate(){
    prompt('how many stars would you give us?');
    for(stars = 0;  )
    document.write('<img src= "https://www.seekpng.com/ima/u2q8a9w7o0t4t4y3/">')
};