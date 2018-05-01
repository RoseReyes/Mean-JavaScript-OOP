function Ninja(name)
{
    this.name = name;
    this.health = 100;
    var speed  = 3; //private
    var strength = 3; //private

    this.showStats = function() {
        console.log("My name is" + " " + this.name +"\n"+ "Strength:" + strength +"\n"+ "Speed:" +" "+ speed +"\n"+ "Health:" +" "+ this.health);
    }

    this.sayName = function(){
        console.log("My name is" +" "+ this.name + "");
    }

    this.drinkSake = function() {
        console.log("Health:" + (this.health + 10));
    }

    this.punch = function(secondNinja){ //this will refer to the second ninja that you passed in not the parent ninja attributes
        secondNinja.health -= 5;
        console.log(this.name +" "+"was punched by"+" "+ secondNinja.name +" "+"and lost"+" "+this.health+"!");
    }

    this.kick = function(secondNinja){
        secondNinja.health -= strength * 15;
        console.log(this.name +" "+"was kicked by"+" "+ secondNinja.name +" "+"and lost"+" "+secondNinja.health);
    }
}

if( blueNinja instanceof Ninja)
{
    var blueNinja = new Ninja("Goemon");
    redNinja.kick(blueNinja);
}
else if(redNinja instanceof Ninja)
{
    var redNinja = new Ninja("Bill Gates");
    redNinja.kick(blueNinja);
}






