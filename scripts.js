function Telefon(marka, cena, kolor, warranty) {
    this.marka = marka;
    this.cena = cena;
    this.kolor = kolor;
   	this.warranty = getWarrantyCost(cena);
   	function getWarrantyCost(cena) {
		var x = cena * 0.1;
   		var result = cena + x;
   		return result;
	} 
}

Telefon.prototype.printInfo = function() {
     console.log('Marka telefonu to ' + this.marka + ', kolor to ' + this.kolor + ', a cena to ' + this.cena + '. ' +'Cena z przedłużoną gwarancją wynosi ' + this.warranty);
}

var galaxyS6 = new Telefon('Samsung', 2000, 'Szary');
var iPhone6S = new Telefon('Apple', 2250, 'Srebrny');
var OnePlus = new Telefon('One', 2500, 'Czarny');

iPhone6S.printInfo();
galaxyS6.printInfo();
OnePlus.printInfo();
