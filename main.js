const player1 = {
    name: 'Scorpion',
    hp: 75,
    img: 'https://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: 'leaf',
    attack() {
        console.log(`${this.name} — Fight...`)
    }
}

const player2 = {
    name: 'Sonya',
    hp: 90,
    img: 'https://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: 'stick',
    attack() {
        console.log(`${this.name} — Fight...`)
    }
}


function createPlayer(className, player) {
    const $arenas = document.querySelector('.arenas')

    const $player = document.createElement('div');
    $player.classList.add(className);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = `${player.hp}%`;

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = player.name;

    const $character = document.createElement('div');
    $character.classList.add('character');

    const $characterImage = document.createElement('img');
    $characterImage.src = player.img;


    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    $character.appendChild($characterImage);

    $player.appendChild($progressbar);
    $player.appendChild($character);


    $arenas.appendChild($player);
}


createPlayer('player1', player1);
createPlayer('player2', player2);
