class Character {

    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;

    constructor (name) {
        this.name = name;
    }


    get life() {
        return this._life
    }

    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife;
    }
}

class Knight extends Character {
    constructor(name) {
        super(name);
        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this.life;
    }
}

class Wizard extends Character {
    constructor(name) {
        super(name);
        this.life = 80;
        this.attack = 15;
        this.defense = 3;
        this.maxLife = this.life;
    }
}

class LittleMonster extends Character {
    constructor () {
        super('Necrófago');
        this.life = 40;
        this.attack = 5;
        this.defense = 4;
        this.maxLife = this.life;
    }
}

class BigMonster extends Character {
    constructor () {
        super('Ogro');
        this.life = 120;
        this.attack = 15;
        this.defense = 7;
        this.maxLife = this.life;
    }
}


class Stage {
    constructor(fighterOne, fighterTwo, fighterOneEl, fighterTwoEl) {
        this.fighterOne = fighterOne;
        this.fighterTwo = fighterTwo;
        this.fighterOneEl = fighterOneEl;
        this.fighterTwoEl = fighterTwoEl;
    }

    start() {
        this.update();

        this.fighterOneEl.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighterOne, this.fighterTwo))
        this.fighterTwoEl.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighterTwo, this.fighterOne))
    }

    update() {
        //Fighter 1
        this.fighterOneEl.querySelector('.name').innerHTML = this.fighterOne.name;
        let f1Pct = (this.fighterOne.life / this.fighterOne.maxLife) * 100;
        this.fighterOneEl.querySelector('.bar').style.width = `${f1Pct}%`;
        //Fighter 2
        this.fighterTwoEl.querySelector('.name').innerHTML = this.fighterTwo.name;
        let f2Pct = (this.fighterTwo.life / this.fighterTwo.maxLife) * 100;
        this.fighterTwoEl.querySelector('.bar').style.width = `${f2Pct}%`;
    }

    doAttack(attacking, attacked) {
    console.log (` ${attacking.name} esta acertando ${attacked.name}`)
}
}

