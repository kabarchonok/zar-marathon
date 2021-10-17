const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'https://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: 'leaf',
    attack() {
        console.log(`${this.name} — Fight...`)
    }
}

const player2 = {
    player: 2,
    name: 'Sonya',
    hp: 100,
    img: 'https://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: 'stick',
    attack() {
        console.log(`${this.name} — Fight...`)
    }
}

function createElement(tag, className) {
    const $tag = document.createElement(tag);

    if (className) {
        $tag.classList.add(className)
    }

    return $tag;
}

function createPlayer(playerObj) {
    const $player = createElement('div', 'player' + playerObj.player);

    const $progressbar = createElement('div', 'progressbar');

    const $life = createElement('div', 'life');
    $life.style.width = `${playerObj.hp}%`;

    const $name = createElement('div', 'name');
    $name.innerText = playerObj.name;

    const $character = createElement('div', 'character');

    const $characterImage = createElement('img');
    $characterImage.src = playerObj.img;


    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    $character.appendChild($characterImage);

    $player.appendChild($progressbar);
    $player.appendChild($character);


    return $player
}

function changeHp(player) {
    const $playerLife = document.querySelector(`.player${player.player}  .life`);
    const hit = Math.ceil(Math.random() * 20);

    player.hp -= hit;
    $playerLife.style.width = player.hp + '%';

    if (player.hp > 0) {
        return;
    }

    player.hp = 0;
    $randomButton.disabled = true;

    const winningPlayerName = getOppositePlayerName(`player${player.player}`)
    $arenas.appendChild(playerWins(winningPlayerName))
}

function playerWins(name) {
    const $winTitle = createElement('div', 'loseTitle');

    $winTitle.innerText = `${name} wins`;

    return $winTitle;
}

function getOppositePlayerName(sourcePlayerName) {
    return document.querySelector(`[class^="player"]:not(.${sourcePlayerName}) .name`).innerText
}


$randomButton.addEventListener('click', function () {
    changeHp(player1);
    changeHp(player2);
})


$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
