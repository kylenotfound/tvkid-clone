(() => {
  // scripts/Player.js
  var Player = class {
    playerstats = {
      "health": 100,
      "power": 10,
      "defense": 10,
      "luck": 5
    };
    getAllStats() {
      return this.playerstats;
    }
    setPlayerStat(statname, statvalue) {
      this.playerstats[statname] = statvalue;
    }
    isDead() {
      return this.playerstats["health"] <= 0;
    }
    survived() {
    }
  };
  var player = new Player();

  // data/enemies.json
  var enemies_default = [
    {
      id: 1,
      name: "frog",
      image: "./assets/frog.png"
    },
    {
      id: 2,
      name: "wizard",
      image: "./assets/wizard.png"
    },
    {
      id: 3,
      name: "spider",
      image: "./assets/spider.png"
    }
  ];

  // scripts/Enemy.js
  var Enemy = class {
    enemy = [];
    enemystats = {
      "health": this.getHealth(),
      "power": this.getPower(),
      "defense": this.getDefense()
    };
    constructor() {
      this.enemy = enemies_default[this.getRandomEnemy()];
    }
    getHealth() {
      return 1;
    }
    getPower() {
      return 2;
    }
    getDefense() {
      return 3;
    }
    getRandomEnemy() {
      return Math.floor(Math.random() * enemies_default.length);
    }
    getEnemyImage() {
      return this.enemy.image;
    }
  };
  function getEnemy() {
    return new Enemy();
  }

  // scripts/main.js
  var currentlevel = 1;
  async function start() {
    let currentEnemy = new getEnemy();
    console.log(player);
    startBattle(player, currentlevel, currentEnemy);
  }
  function startBattle(player2, level, enemy) {
    setLevelText();
    updateStats(player2, enemy);
    drawBattle(enemy);
  }
  function drawBattle(enemy) {
    let battlebox = document.getElementById("battle-box");
    let newEnemy = document.createElement("div");
    newEnemy.setAttribute("id", "current-enemy");
    let enemyImage = document.createElement("img");
    enemyImage.setAttribute("src", enemy.getEnemyImage());
    enemyImage.setAttribute("id", "enemy-image");
    enemyImage.setAttribute("width", 400);
    enemyImage.setAttribute("height", 400);
    newEnemy.appendChild(enemyImage);
    battlebox.appendChild(newEnemy);
  }
  function updateStats(player2, enemy) {
    document.getElementById("player-health").innerHTML = "Health: " + player2.playerstats.health;
    document.getElementById("player-power").innerHTML = "Power: " + player2.playerstats.power;
    document.getElementById("player-defense").innerHTML = "Defense: " + player2.playerstats.defense;
    document.getElementById("player-luck").innerHTML = "Luck: " + player2.playerstats.luck;
    document.getElementById("enemy-health").innerHTML = "Health: " + enemy.enemystats.health;
    document.getElementById("enemy-power").innerHTML = "Power: " + enemy.enemystats.power;
    document.getElementById("enemy-defense").innerHTML = "Defense: " + enemy.enemystats.defense;
  }
  function setLevelText() {
    document.getElementById("current-level").innerHTML = "Level " + currentlevel;
  }
  start();
  document.addEventListener("click", function(event) {
    let enemy = event.target.closest("img");
    if (enemy) {
      alert("Will do the attacking logic here and stuff");
    }
  });
})();
