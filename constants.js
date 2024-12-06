const ROLES = {
    tank: 'tank',
    dps: 'dps',
    healer: 'healer'
};

const CLASSES = {
    dk: 'death-knight',
    druid: 'druid',
    hunter: 'hunter',
    mage: 'mage',
    paladin: 'paladin',
    priest: 'priest',
    rogue: 'rogue',
    shaman: 'shaman',
    warlock: 'warlock',
    warrior: 'warrior'
};

const SPECS = {
    blood: 'blood',
    frost: 'frost',
    unholy: 'unholy',
    balance: 'balance',
    feral: 'feral',
    cat: 'cat',
    bear: 'bear',
    restoration: 'restoration',
    beastMastery: 'beast-mastery',
    marksmanship: 'marksmanship',
    survival: 'survival',
    arcane: 'arcane',
    fire: 'fire',
    holy: 'holy',
    protection: 'protection',
    retribution: 'retribution',
    discipline: 'discipline',
    shadow: 'shadow',
    assassination: 'assassination',
    combat: 'combat',
    subtlety: 'subtlety',
    elemental: 'elemental',
    enhancement: 'enhancement',
    affliction: 'affliction',
    demonology: 'demonology',
    destruction: 'destruction',
    arms: 'arms',
    fury: 'fury'
};

const CLASS_SPEC_ROLES = [
    { class: CLASSES.dk, spec: SPECS.blood, role: ROLES.tank },
    { class: CLASSES.dk, spec: SPECS.frost, role: ROLES.dps },
    { class: CLASSES.dk, spec: SPECS.unholy, role: ROLES.dps },
    { class: CLASSES.druid, spec: SPECS.balance, role: ROLES.dps }, 
    { class: CLASSES.druid, spec: SPECS.cat, urlSpec: SPECS.feral, role: ROLES.dps },
    { class: CLASSES.druid, spec: SPECS.bear, urlSpec: SPECS.feral, role: ROLES.tank },
    { class: CLASSES.druid, spec: SPECS.restoration, role: ROLES.healer },
    { class: CLASSES.hunter, spec: SPECS.beastMastery, role: ROLES.dps },
    { class: CLASSES.hunter, spec: SPECS.marksmanship, role: ROLES.dps },
    { class: CLASSES.hunter, spec: SPECS.survival, role: ROLES.dps },
    { class: CLASSES.mage, spec: SPECS.arcane, role: ROLES.dps },
    { class: CLASSES.mage, spec: SPECS.fire, role: ROLES.dps },
    { class: CLASSES.mage, spec: SPECS.frost, role: ROLES.dps },
    { class: CLASSES.paladin, spec: SPECS.holy, role: ROLES.healer },
    { class: CLASSES.paladin, spec: SPECS.protection, role: ROLES.tank },
    { class: CLASSES.paladin, spec: SPECS.retribution, role: ROLES.dps },
    { class: CLASSES.priest, spec: SPECS.discipline, role: ROLES.healer },
    { class: CLASSES.priest, spec: SPECS.holy, role: ROLES.healer },
    { class: CLASSES.priest, spec: SPECS.shadow, role: ROLES.dps },
    { class: CLASSES.rogue, spec: SPECS.assassination, role: ROLES.dps },
    { class: CLASSES.rogue, spec: SPECS.combat, role: ROLES.dps },
    { class: CLASSES.rogue, spec: SPECS.subtlety, role: ROLES.dps },
    { class: CLASSES.shaman, spec: SPECS.elemental, role: ROLES.dps },
    { class: CLASSES.shaman, spec: SPECS.enhancement, role: ROLES.dps },
    { class: CLASSES.shaman, spec: SPECS.restoration, role: ROLES.healer },
    { class: CLASSES.warlock, spec: SPECS.affliction, role: ROLES.dps },
    { class: CLASSES.warlock, spec: SPECS.demonology, role: ROLES.dps },
    { class: CLASSES.warlock, spec: SPECS.destruction, role: ROLES.dps },
    { class: CLASSES.warrior, spec: SPECS.arms, role: ROLES.dps },
    { class: CLASSES.warrior, spec: SPECS.fury, role: ROLES.dps },
    { class: CLASSES.warrior, spec: SPECS.protection, role: ROLES.tank }
];

const SLOTS = {
    head: 'Head',
    shoulder: 'Shoulder',
    back: 'Back',
    chest: 'Chest',
    wrist: 'Wrist',
    hands: 'Hands',
    waist: 'Waist',
    legs: 'Legs',
    feet: 'Feet',
    neck: 'Neck',
    ring: 'Ring',
    trinket: 'Trinket',
    twoHand: 'Two-Hand',
    mainHand: 'Main Hand',
    offHand: 'Off Hand',
    mainOffHand: 'Main Hand/Off Hand',
    ranged: 'Ranged/Relic'
}

module.exports = {
    ROLES,
    CLASSES,
    SPECS,
    SLOTS,
    CLASS_SPEC_ROLES
}