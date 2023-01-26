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

function healthDisplay(){
    // debugger
    heroes.forEach(hero => {
        let heroElem = document.getElementById(hero.name)
        console.log('heroElem', heroElem)
        // let heroh3 = heroElem.querySelector('h3')
        // console.log(heroh3)
        heroElem.innerText = `${hero.name} - ${hero.health} - ${hero.damage}`
    })
}
console.log(healthDisplay())






function goroAttack(heroName){
    let hero = heroes.find(h => h.name == heroName);
    hero.health -= 5
healthDisplay()
    console.log(hero);
}

healthDisplay()