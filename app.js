const heroes = [
    {
        name: 'Johnny Cage',
        type: 'Human',
        damage: 10,
        health: 50,
    },
    {
        name: 'Jax',
        type: 'Cyborg',
        damage: 5,
        health: 100,
    }
]


const boss = {
    name: 'Goro',
    health: 100,
    maxHealth: 100,
    damage: 5,
    level: 1,
}

function findHero(heroName){
    let foundHero = heroes.find(h => heroes.name == heroName)



}
console.log(findHero())







function goroAttackBoth(heroName){
    let hero = heroes.find(h => h.name == heroName);
    hero.health -= 5

    console.log(hero);
}


function goroAttackSingle(heroHealth){
    let lessHealth = heroes.find(h => h.health == heroesHealth)
}
// goroAttackBoth()