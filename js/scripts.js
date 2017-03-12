function Smartphone (brand, price, color, os){
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.os = os;
}

Smartphone.prototype.printInfo = function(){
	console.log("Smartphone brand is " + this.brand + ". It costs " + this.price + " PLN and the color is " + this.color + ".");
};
Smartphone.prototype.printOSMessage = function (){
	if (this.os == 'iOS') {
		console.log('Bye Bye Cyanogen mode');
	}
	else {
		console.log('You like custom Roms don\'t you?');
	}
};

var samsungGalaxyS6 = new Smartphone('Galaxy S6', 2200, 'black', 'android');
var iPhone6s = new Smartphone('iPhone 6s', 3400, 'white', 'iOS');
var OnePlusOne = new Smartphone('OnePlusOne', 1, 'transaprent', 'android');

samsungGalaxyS6.printInfo();
samsungGalaxyS6.printOSMessage();

iPhone6s.printInfo();
iPhone6s.printOSMessage();

OnePlusOne.printInfo();
OnePlusOne.printOSMessage();