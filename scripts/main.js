import { player } from './Player.js';
import { getEnemy } from './Enemy.js';
import { getShop } from './Shop.js';

let currentlevel = 1;

async function start () {

    let currentEnemy = new getEnemy();


    console.log(player);
    startBattle(player, currentlevel, currentEnemy)
}

function startBattle (player, level, enemy) {
    
    //update the level we are on
    setLevelText();
    updateStats(player, enemy);

    //draw the battle
    drawBattle(enemy);
}

function drawBattle(enemy) {
    let battlebox = document.getElementById('battle-box');

    let newEnemy = document.createElement('div');
    newEnemy.setAttribute('id', 'current-enemy');

    let enemyImage = document.createElement('img')
    enemyImage.setAttribute('src', enemy.getEnemyImage());
    enemyImage.setAttribute('id', 'enemy-image');
    enemyImage.setAttribute('width', 400);
    enemyImage.setAttribute('height', 400);
    
    newEnemy.appendChild(enemyImage);
    battlebox.appendChild(newEnemy);
}

function attack () {

}

function updateStats (player, enemy) {
    /**
     * Update Player's stats
     */
    document.getElementById('player-health').innerHTML = 'Health: ' + player.playerstats.health;
    document.getElementById('player-power').innerHTML = 'Power: ' + player.playerstats.power;
    document.getElementById('player-defense').innerHTML = 'Defense: ' + player.playerstats.defense;
    document.getElementById('player-luck').innerHTML = 'Luck: ' + player.playerstats.luck;

    /**
     * Update Enemy Stats
     */
    document.getElementById('enemy-health').innerHTML = 'Health: ' + enemy.enemystats.health;
    document.getElementById('enemy-power').innerHTML = 'Power: ' + enemy.enemystats.power;
    document.getElementById('enemy-defense').innerHTML = 'Defense: ' + enemy.enemystats.defense;
}

function setLevelText () {
    document.getElementById('current-level').innerHTML = "Level " + currentlevel;
}

start();

/**
 * Core Game-Loop Listener
 */
document.addEventListener('click', function(event) {
    let enemy = event.target.closest('img');

    if (enemy) {
        alert('Will do the attacking logic here and stuff')
    }
});