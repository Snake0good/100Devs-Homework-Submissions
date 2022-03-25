const pen = {
    type: "ballpoint",
    color: "blue",
    brand: "Bic", 
    
    describe() {
        return `The pen is a ${this.color} ${this.brand} ${this.type}.`
    }
};



const pencil = {
    type: "wooden Pencil",
    color: "graphite",
    brand: "M & G",
    
    describe() {
        return `The pen is a ${this.color} ${this.brand} ${this.type}.`
    }
}

console.log(pen.describe())
console.log(pencil.describe())

const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25,
    xp: 0,
  
    // Return the character description
    describe() {
      return `${this.name} has ${this.health} health points and ${this
        .strength} as strength and ${this.xp} XP points`;
    }
};
aurora.health -= 20;
aurora.strength += 10;
aurora.xp += 15;

console.log(aurora.describe())


const dog = {
    name: 'Fido',
    species: 'labrador',
    size: 75,

    bark() {
        return `Grrr! Grrr!`
    }
}

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);


const r = 2;

const circle = {
    circumference() {
        return (2 * Math.PI * r)
    },

    area() {
        return this.circumference() * r
    }
}

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);



let account = {
    name: 'Alex',
    balance: 0,
    credit(num) {
        this.balance += num
    },
    describe() {
        return `owner: ${this.name}, balance ${this.balance}`
    }
}

console.log(account.describe())

account.credit(250);
account.credit(-80)

console.log(account.describe())
