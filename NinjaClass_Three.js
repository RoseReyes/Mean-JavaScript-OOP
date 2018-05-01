class Ninja
{
    constructor(name)
    {
        this.name = name;
        this.health = 100;
        this.speed  = 3; 
        this.strength = 3; 
    }

    showStats() {
        console.log(`My name is ${this.name}\nStrength: ${this.strength}\nSpeed: ${this.speed}\nHealth: ${this.health}`);
    }

    sayName(){
        console.log(`My name is ${this.name}`);
    }

    drinkSake(){
        console.log(`Health: ${this.health + 10}`);
    }
}

class Sensei extends Ninja {
    constructor(name, health, speed, strength, wisdom){ 
        super(name, health, speed, strength);
            this.health = 200;
            this.speed = 10;
            this.strength = 10;
            this.wisdom = 10;
    }

    speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }

}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();

// var blueNinja = new Ninja("Goemon");
// blueNinja.sayName();
// blueNinja.showStats();




