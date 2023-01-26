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
    damage: 5,
    level: 1,
}

function findHero(heroName){
    let foundHero = heroes.find(h => heroes.name == heroName)



}
// console.log(findHero())

function healthDisplay(){
    // debugger
    heroes.forEach(hero => {
        let heroElem = document.getElementById(hero.name)
        heroElem.innerText = `${hero.name} - ${hero.health} - ${hero.damage}`
        if (hero.health <= 0) {
            hero.health = 0        
                }
    })

  let bossElem =  document.getElementById(boss.name)
  bossElem.innerText = `${boss.name} - ${boss.health} - ${boss.damage}`
}

function healthDisplayGoro(){
        let bossElem = document.getElementById(boss.name)
        bossElem.innerText = `${boss.name} - ${boss.health} - ${boss.damage}`
}

function heroAttack(){
console.log("work?")
    boss.health -= 1
    console.log(boss.health);
    healthDisplay()
    if (boss.health <= 0) {
        boss.health = 1        
            }
}
// console.log(boss.health -= 10)




function goroAttack(heroName){
    let hero = heroes.find(h => h.name == heroName);
    hero.health -= 5
healthDisplay()
    // console.log(hero);

}

function healthGoAway(){
if (boss.health > 0) {
    setInterval(heroAttack, 200)
} else {
    setInterval(heroAttack, 0)
}
    
}

healthGoAway()
healthDisplay()
healthDisplayGoro()