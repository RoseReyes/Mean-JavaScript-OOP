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
}
var first_ninja = new Ninja("Rose");
first_ninja.sayName();
first_ninja.drinkSake();
first_ninja.showStats();

