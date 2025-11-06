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
    }

    update() {
        this.fighterOneEl.querySelector('.name').innerHTML = this.fighterOne.name;
        this.fighterTwoEl.querySelector('.name').innerHTML = this.fighterTwo.name;
    }
}