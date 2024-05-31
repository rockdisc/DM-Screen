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
let pp2 = 15
let pp3 = 11
let pp4 = 13
let pp5 = 15
let pp6 = 16
let pp7 = 11
let pp8 = 13

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
let nam
let names
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
    const randomJob = Math.floor (Math.random() * 50) 
    const randomAlly = Math.floor (Math.random() * 9) 
    const randomGender = Math.floor (Math.random() * 2)
    const randomMaleName = Math.floor (Math.random() * 50)
    const randomFemaleName = Math.floor (Math.random() *50 + 50)

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

    jobs = ['Alchemist','Apothecary','Barber-Surgeon','Bard','Blacksmith','Brewer','Carpenter','Cartographer','Cleric','Cook','Druid','Falconer','Farmer','Fisherman','Fletcher','Gravedigger','Herbalist','Innkeeper','Jester','Knight','Librarian','Mercenary','Minstrel','Monk','Noble','Painter','Ranger','Sailor','Scribe','Seamstress','Shoemaker','Sorcerer','Squire','Stablehand','Tavern Keeper','Thief','Troubadour','Wainwright','Warlock','Weaponsmith','Weaver','Wizard','Woodcutter','Bounty Hunter','Executioner','Gambler','Juggler','Oracle','Rat Catcher']
    job = jobs[randomJob]
    
// Gender

    genders = ['Male','Female']
    gender = genders[randomGender]

// Names

    names = ['Arthur','William','Henry','Richard','Edward','John','Robert','Geoffrey','Hugh','Philip','Thomas','Stephen','James','Walter','Roger','Peter','David','Nicholas','Alan','Adam','Gilbert','Ralph','Bartholomew','Simon','Mathew','Gerald','Reginald','Gilbert','Hubert','Godfrey','Louis','Frederick','Charles','Arnold','Baldwin','Cuthbert','Edmund','Fulk','Giles','Ivo','Lancelot','Miles','Odo','Percival','Quentin','Raymond','Sylvester','Theobald','Vincent', 'Adelaide','Agnes','Alice','Beatrice','Cecilia','Constance','Eleanor','Emma','Isabel','Joan','Margaret','Matilda','Maud','Rose','Sybil','Agatha','Alys','Amabel','Blanche','Clarice','Edith','Eloise','Emeline','Felicia','Giselle','Helena','Ida','Juliana','Lettice','Margery','Olive','Petronilla','Rohese','Sibyl','Thomasine','Aveline','Christiana','Dionisia','Euphemia','Gundred','Helewys','Isolde','Leonor','Melisende','Nest','Oriel','Pernel','Rohesia','Sarai']
    if (gender == 'Male') {
        Name = names[randomMaleName]
    }
    if (gender == 'Female') {
        Name = names[randomFemaleName]
    }

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
        <h2>${Name}</h2>
        <h3>${race}</h3>
        <h3>${money}</h3>
        <h3>${job}</h3> 
        <h3>${ally}</h3>
        <h3>${gender}</h3>`
    document.getElementById('nContainer').appendChild(npcHolder)
}

// Item functions
function Item() {
    const randomItem = Math.floor (Math.random() * 56) 
    items = ['Amulet','Anvil','Arrow','Backpack','Bag of Holding','Belt Pouch','Book of Spells','Bow and Arrows','Candle','Chain Mail','Cloak','Crystal Ball','Dagger','Deck of Tarot Cards','Drinking Horn','Enchanted Mirror','Feathered Quill','Flask of Holy Water','Gloves of Dexterity','Gold Coin','Hammer','Healing Potion','Holy Symbol','Horn of Blasting','Hourglass','Iron Key','Jeweled Crown','Kite Shield','Lantern','Leather Boots','Locket','Lute','Mage Robes','Map of the Realm','Medicinal Herbs','Mithril Chainmail','Moonstone','Obsidian Orb','Oil Flask','Perfume Vial','Quiver of Arrows','Rope and Grappling Hook','Ruby Ring','Sapphire Pendant','Scroll of Protection','Silver Dagger','Spellbook','Steel Gauntlets','Tome of Knowledge','Unicorn Horn','Vial of Dragons Blood','Warhammer','Water Skin','Xylophone','Yew Wand','Zephyr Feather']
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
    const randomEvent = Math.floor (Math.random() * 97) 
    events = [ 'Bandit Attack','Dragon Sighting','Goblin Ambush','Witchs Curse','Ghostly Apparition','Treasure Map','Lost Child','Magic Potion','Orc Horde','Mysterious Fog','Dire Wolves','Friendly Wizard','Ancient Burial','Cursed Object','Hidden Portal','Mystic Mirror','Wizard Duel','Royal Decree','Feywild Portal','Werewolf Pack','Celestial Sign','Dark Ritual','Haunted Tavern','Time Loop','Enchanted Sword','Alien Invasion','Forest Fire','Storm Giant','Mind Flayer','Wild Magic','Ancient Ruins','Giant Spider','Winged Serpent','Infernal Pact','Swamp Witch','Druid Circle','Magic Fountain','Illusionary Maze','Bards Song','Elemental Rift','Demonic Ritual','Lichs Phylactery','Mimic Chest','Unseen Servant','Blink Dog','Halfling Feast','Dancing Lights','Invisible Stalker','Necromancers Lair','Banshee Wail','Fireball Explosion','Frost Giant','Corrupted Knight','Petrified Statue','Vengeful Spirit','Vampire Bite','Giant Rat','Peace Offering','Wandering Minstrel','Beast Tamer','Poisoned Well','Deathly Hallow','Healing Spring','Troll Bridge','Entangled Roots','Rainbow Bridge','Glowing Orb','Flaming Sword','Twilight Zone','Warriors Honor','Sorcerers Staff','Infernal Pact','Misty Veil','Shifting Sands','Thunder Strike','Silver Lining','Divine Blessing','Crystal Shard','Primordial Ooze','Celestial Beacon','Moonlit Grove','Ancient Scroll','Hidden Blade','Ghost Ship','Cursed Idol','Scorching Sun','Wailing Banshee','Serpentine Staff','Silent Watcher','Glowing Amulet','Broken Mirror','Whispering Wind','Frostbitten Wasteland','Crystal Clear','Winged Messenger','Eternal Flame','Fading Light']
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
    rolls = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
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
