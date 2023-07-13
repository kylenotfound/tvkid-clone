import enemy_list from '../data/enemies.json' assert {type: 'json'};

class Enemy {
    enemy = []

    enemystats = {
        'health': this.getHealth(),
        'power': this.getPower(),
        'defense': this.getDefense()
    }

    constructor () {
        this.enemy = enemy_list[this.getRandomEnemy()]
    }

    getHealth () {
        return 1;
    }

    getPower () {
        return 2;
    }

    getDefense () {
        return 3;
    }

    getRandomEnemy() {
        return Math.floor(Math.random() * enemy_list.length)
    }

    getEnemyImage() {
        return this.enemy.image;
    }
}

export function getEnemy() {
    return new Enemy();
}