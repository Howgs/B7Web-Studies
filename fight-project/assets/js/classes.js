class Character {
  _life = 1;
  maxLife = 1;
  attack = 0;
  defense = 0;

  constructor(name) {
    this.name = name;
  }

  get life() {
    return this._life;
  }

  set life(newLife) {
    this._life = newLife < 0 ? 0 : newLife;
  }
}

class Knight extends Character {
  constructor(name) {
    super(name);
    this.life = 100;
    this.attack = 9;
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
  constructor() {
    super("Necrófago");
    this.life = 40;
    this.attack = 5;
    this.defense = 4;
    this.maxLife = this.life;
  }
}

class BigMonster extends Character {
  constructor() {
    super("Ogro");
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

    //Buttom listeners and function
    this.fighterOneEl
      .querySelector(".attackButton")
      .addEventListener("click", () => this.doAttack(this.fighterOne, this.fighterTwo));
    this.fighterTwoEl
      .querySelector(".attackButton")
      .addEventListener("click", () => this.doAttack(this.fighterTwo, this.fighterOne));
  }

  update() {
    //Fighter 1
    let f1Pct = (this.fighterOne.life / this.fighterOne.maxLife) * 100;
    this.fighterOneEl.querySelector(".name").innerHTML = `${this.fighterOne.name} - ${f1Pct.toFixed(0)}% HP`;
    this.fighterOneEl.querySelector(".bar").style.width = `${f1Pct}%`;
    //Fighter 2
    let f2Pct = (this.fighterTwo.life / this.fighterTwo.maxLife) * 100;
    this.fighterTwoEl.querySelector(".name").innerHTML = `${this.fighterTwo.name} - ${f2Pct.toFixed(0)}% HP`;
    this.fighterTwoEl.querySelector(".bar").style.width = `${f2Pct}%`;
  }

  doAttack(attacking, attacked) {
    if (attacking.life > 0 && attacked.life <= 0) {
      console.log("inimigo morto");
      return;
    } else if (attacking.life <= 0 && attacked.life >= 0) {
      console.log("Fighter está fora de combate");
      return;
    }

    let attackFactor = Math.floor(Math.random() * 3);
    let defenseFactor = Math.floor(Math.random() * 3);

    let actualAttack = attacking.attack * attackFactor;
    let actualDefense = attacked.defense * defenseFactor;

    if (actualAttack > actualDefense) {
      attacked.life -= actualAttack;
      console.log(`${attacking.name} acertou ${attacked.name}, DANO = ${actualAttack}`);
    } else {
      console.log(`${attacked.name} defendeu o ataque de ${attacking.name}`);
    }

    this.update();
  }
}
