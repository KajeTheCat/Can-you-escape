'use strict'

alert('Hello adventurer, Welcome to our escape rooms!');

let answer = prompt('Which adventure would you prefer? Desert, Magic, or Wonderland?');

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

