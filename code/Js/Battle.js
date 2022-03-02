const hero = {
  hpMax: 10,
  hp: 10,
  attack: 2,
  magic: 2,
};

const enemy = {
  hpMax: 5,
  hp: 5,
  attack: 2,
  magic: 1,
};

setHeroHp();
setEnemyHp();

function turn(action) {
  console.log(action);
  const actions = ["attack", "parry", "magic"];
  const enemyAction = actions[getRandomInt(1, 3)];
  switch (action) {
    case actions[0]:
      console.log("Heroe Ataca");
      switch (enemyAction) {
        case actions[0]:
          console.log("Enemigo Ataca");
          hero.hp -= enemy.attack * 0.5;
          enemy.hp -= hero.attack * 0.5;
          break;
        case actions[1]:
          console.log("Enemigo Defiende");
          hero.hp -= enemy.attack * 1;
          enemy.hp -= hero.attack * 0;
          break;
        case actions[2]:
          console.log("Enemigo Magia");
          hero.hp -= enemy.attack * 0;
          enemy.hp -= hero.attack * 1;
          break;
        default:
          console.log("Algo va mu mal en el random");
          break;
      }
      break;
    case actions[1]:
      console.log("Heroe Parry");
      switch (enemyAction) {
        case actions[0]:
          console.log("Enemigo Ataca");
          hero.hp -= enemy.attack * 0;
          enemy.hp -= hero.attack * 1;
          break;
        case actions[1]:
          console.log("Enemigo Defiende");
          hero.hp -= enemy.attack * 0;
          enemy.hp -= hero.attack * 0;
          break;
        case actions[2]:
          console.log("Enemigo Magia");
          hero.hp -= enemy.attack * 1;
          enemy.hp -= hero.attack * 0;
          break;
        default:
          console.log("Algo va mu mal en el random");
          break;
      }
      break;
    case actions[2]:
      console.log("Heroe Magia");
      switch (enemyAction) {
        case actions[0]:
          console.log("Enemigo Ataca");
          hero.hp -= enemy.attack * 1;
          enemy.hp -= hero.attack * 0;
          break;
        case actions[1]:
          console.log("Enemigo Defiende");
          hero.hp -= enemy.attack * 0;
          enemy.hp -= hero.attack * 1;
          break;
        case actions[2]:
          console.log("Enemigo Magia");
          hero.hp -= enemy.attack * 1;
          enemy.hp -= hero.attack * 1;
          break;
        default:
          console.log("Algo va mu mal en el random");
          break;
      }
      break;
    default:
      console.log("¿Que argumento es este?");
      break;
  }
  setHeroHp();
  setEnemyHp();
}

function setHeroHp() {
  const hpBar = document.querySelector(".hud--hp");
  hpBar.innerHTML = `HP: ${hero.hp}/${hero.hpMax}`;
}

function setEnemyHp() {
  const hpBar = document.querySelector(".battleground--enemy--hpBar");
  hpBar.innerHTML = `HP: ${enemy.hp}/${enemy.hpMax}`;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
