class Player {
    playerstats = {
        'health': 100,
        'power': 10,
        'defense': 10,
        'luck': 5
    };

    getAllStats () {
        return this.playerstats;
    }

    setPlayerStat (statname, statvalue) {
        this.playerstats[statname] = statvalue;
    }

    isDead () {
        return this.playerstats['health'] <= 0;
    }

    survived () {

    }
}

export const player = new Player();