// variables for players
const manaDisplay1 = document.getElementById("manaTotal1")
const manaDisplay2 = document.getElementById("manaTotal2")
const manaDisplay3 = document.getElementById("manaTotal3")
const manaDisplay4 = document.getElementById("manaTotal4")
const manaDisplay5 = document.getElementById("manaTotal5")
const manaDisplay6 = document.getElementById("manaTotal6")
const manaDisplay7 = document.getElementById("manaTotal7")
const manaDisplay8 = document.getElementById("manaTotal8")

let manaTotal1
let manaTotal2
let manaTotal3
let manaTotal4
let manaTotal5
let manaTotal6
let manaTotal7
let manaTotal8

// Change these ones when the players get more efficiency
// Mark
let mEff1 = 10
//Jackson
let mEff2 = 12
//Jack
let mEff3 = 15
//Felix
let mEff4 = 2
//James
let mEff5 = 35
//Mish
let mEff6 = 30
//Ezra
let mEff7 = 40
//Logan
let mEff8 = 20

// Change these ones when the players figure out how to get more capacity
//Mark
let mCap1 = 200
//Jackson
let mCap2 = 100
//Jack
let mCap3 = 300
//Felix
let mCap4 = 1000
//James
let mCap5 = 100
//Mish
let mCap6 = 100
//Ezra
let mCap7 = 100
//Logan
let mCap8 = 200

//Passive Perception 
let PPDisplay1 = document.getElementById('PP1')
let PPDisplay2 = document.getElementById('PP2')
let PPDisplay3 = document.getElementById('PP3')
let PPDisplay4 = document.getElementById('PP4')
let PPDisplay5 = document.getElementById('PP5')
let PPDisplay6 = document.getElementById('PP6')
let PPDisplay7 = document.getElementById('PP7')
let PPDisplay8 = document.getElementById('PP8')

let pp1 = 16
let pp2 = 10
let pp3 = 13
let pp4 = 13
let pp5 = 13
let pp6 = 15
let pp7 = 13
let pp8 = 11

PPDisplay1.innerHTML = pp1
PPDisplay2.innerHTML = pp2
PPDisplay3.innerHTML = pp3
PPDisplay4.innerHTML = pp4
PPDisplay5.innerHTML = pp5
PPDisplay6.innerHTML = pp6
PPDisplay7.innerHTML = pp7
PPDisplay8.innerHTML = pp8
//variables for npcs
let race = 0
let money = 0
let job = 0
let ally = 0
let gender = 0
let genders
let races 
let mone
let all
let jobs
//variables for items
let item = 0
let items
//variables for events
let evet = 0
let events
//variables for rolls
let rolls
let rollX = 0 
// player functions
function apply1() {
    manaTotal1 = mEff1 * mCap1
    manaDisplay1.innerHTML = manaTotal1
}
function apply2() {
    manaTotal2 = mEff2 * mCap2
    manaDisplay2.innerHTML = manaTotal2
}
function apply3() {
    manaTotal3 = mEff3 * mCap3
    manaDisplay3.innerHTML = manaTotal3
}
function apply4() {
    manaTotal4 = mEff4 * mCap4
    manaDisplay4.innerHTML = manaTotal4
}
function apply5() {
    manaTotal5 = mEff5 * mCap5
    manaDisplay5.innerHTML = manaTotal5
}
function apply6() {
    manaTotal6 = mEff6 * mCap6
    manaDisplay6.innerHTML = manaTotal6
}
function apply7() {
    manaTotal7 = mEff7 * mCap7
    manaDisplay7.innerHTML = manaTotal7
}
function apply8() {
    manaTotal8 = mEff8 * mCap8
    manaDisplay8.innerHTML = manaTotal8
}
 
function use1() {
    manaTotal1 -= cost1.value
    manaDisplay1.innerHTML = manaTotal1
}
function use2() {
    manaTotal2 -= cost2.value
    manaDisplay2.innerHTML = manaTotal2
}
function use3() {
    manaTotal3 -= cost3.value
    manaDisplay3.innerHTML = manaTotal3
}
function use4() {
    manaTotal4 -= cost4.value
    manaDisplay4.innerHTML = manaTotal4
}
function use5() {
    manaTotal5 -= cost5.value
    manaDisplay5.innerHTML = manaTotal5
}
function use6() {
    manaTotal6 -= cost6.value
    manaDisplay6.innerHTML = manaTotal6
}
function use7() {
    manaTotal7 -= cost7.value
    manaDisplay7.innerHTML = manaTotal7
}
function use8() {
    manaTotal8 -= cost8.value
    manaDisplay8.innerHTML = manaTotal8
}

// NPC functions
function npc() {
    const randomRace = Math.floor (Math.random() * 30) 
    const randomMoney = Math.floor (Math.random() * 10) 
    const randomJob = Math.floor (Math.random() * 25) 
    const randomAlly = Math.floor (Math.random() * 9) 
    const randomGender = Math.floor (Math.random() * 2)
    
// Races

    races = ['Aarakocra','Bugbear','Centaur','Dragonborn','Dwarf','Elf','Fairy','Firbolg','Gnome','Goblin','Goliath','Half-Elf','Half-Orc','Halfling','Harengon','Hobgoblin','Human','Kenku','Leonin','Lizardfolk','Loxodon','Locathah','Orc','Owlin','Plasmoid','Satyr','Tabaxi','Tortle','Tiefling','Triton']
    race = races[randomRace]

    
//Money
    mone = ['1sp','5sp','1cp','10g','10sp','10cp','5gp','10pp','1pp','1gp']
    money = mone[randomMoney]


//Alignment

    all = ['Lawful Good','Neutral Good','Chaotic Good','Lawful Neutral','Neutral','Chaotic Neutral','Lawful Evil','Neutral Evil','Chaotic Evil']
    ally = all[randomAlly]


// Job

    jobs = ['Farmer','Barkeeper','Blacksmith','Butcher','Tanner','Baker','Soldier','Hidden Noble','Hunter','Mercenary','Sailor','Smuggler','Priest','Gort the Serf of the Year','Squire','Mage','Warlock','Cleric','Ranger','Rogue','Paladin','Druid','Barbarian','Fighter','Doctor']
    job = jobs[randomJob]
    
// Gender

    genders = ['Male','Female']
    gender = genders[randomGender]

//making it work
    let npcHolder = document.createElement('div')
    npcHolder.classList.add('npcHolder')
    npcHolder.style.marginTop = '10px'
    npcHolder.style.width = '125px'
    npcHolder.style.height = 'fit-content'
    npcHolder.style.padding = '5px'
    npcHolder.style.backgroundColor = '#0544a8'
    npcHolder.style.borderRadius = '10px'
    npcHolder.innerHTML = `
    <div class="npc">
        <h2>${race}</h2>
        <h3>${money}</h3>
        <h3>${job}</h3> 
        <h3>${ally}</h3>
        <h3>${gender}</h3>`
    document.getElementById('nContainer').appendChild(npcHolder)
}

// Item functions
function Item() {
    const randomItem = Math.floor (Math.random() * 10) 
    items = ['Sword','Dagger','Axe','Mace','Spear','Bow','Crossbow','Staff','Wand','Shield','Clothing','Fabric','Candlestick','Arrows','String','Oil','Expired Potion','Boots','Books']
    item = items[randomItem]


    let itemHolder = document.createElement('div')
    itemHolder.classList.add('itemHolder')
    itemHolder.style.marginTop = '10px'
    itemHolder.style.width = '125px'
    itemHolder.style.height = 'fit-content'
    itemHolder.style.padding = '5px'
    itemHolder.style.borderRadius = '10px'
    itemHolder.style.backgroundColor = '#0544a8'
    itemHolder.innerHTML = `
    <div class="item">
        <h2>${item}</h2>`
    document.getElementById('iContainer').appendChild(itemHolder)
}
//Event functions
function Event() {
    const randomEvent = Math.floor (Math.random() * 12) 
    events = ['Gold','Goblins','Death','Monster','Bard Battle','Conflict Brewing','Breakup','Birthday','Drug Deal','Cover Up','Naked Man','Weird Person']
    evet = events[randomEvent]

    let eventHolder = document.createElement('div')
    eventHolder.classList.add('eventHolder')
    eventHolder.style.marginTop = '10px'
    eventHolder.style.width = '125px'
    eventHolder.style.height = 'fit-content'
    eventHolder.style.padding = '5px'
    eventHolder.style.borderRadius = '10px'
    eventHolder.style.backgroundColor = '#0544a8'
    eventHolder.innerHTML = `
    <div class="event">
        <h2>${evet}</h2>`
    document.getElementById('eContainer').appendChild(eventHolder)
}

//Roll Functions
function roll() {
    console.log('Rolling')
    let typeDice = parseInt(document.getElementById("typDice").value)
    const randomRoll = Math.floor (Math.random() * typeDice) 
    rolls = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20']
    rollX = rolls[randomRoll]
        let rollHolder = document.createElement('div')
        rollHolder.classList.add('rollHolder')
        rollHolder.style.marginTop = '10px'
        rollHolder.style.width = '125px'
        rollHolder.style.height = 'fit-content'
        rollHolder.style.padding = '5px'
        rollHolder.style.borderRadius = '10px'
        rollHolder.style.backgroundColor = '#0544a8'
        rollHolder.innerHTML = `
        <div class="roll">
            <h2>${rollX}</h2>`
        document.getElementById('rContainer').appendChild(rollHolder)
    
}
