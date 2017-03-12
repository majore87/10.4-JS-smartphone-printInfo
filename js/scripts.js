function Smartphone (brand, price, color){
	this.brand = brand;
	this.price = price;
	this.color = color;
}

Smartphone.prototype.printInfo = function(){
	console.log("Smartphone brand is " + this.brand + ". It costs " + this.price + " PLN and the color is " + this.color + ".");
};


var samsungGalaxyS6 = new Smartphone('Galaxy S6', 2200, 'black');
var iPhone6s = new Smartphone('iPhone 6s', 3400, 'white');
var OnePlusOne = new Smartphone('OnePlusOne', 1, 'transaprent');

samsungGalaxyS6.printInfo();
iPhone6s.printInfo();
OnePlusOne.printInfo();