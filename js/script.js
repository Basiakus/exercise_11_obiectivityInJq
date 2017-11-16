function Phone(mark, model, color, price) {
    this.mark = mark;
    this.model = model;
    this.color = color;
    this.price = price;
};

Phone.prototype.view = function() {
    console.log('marka telefonu: ' + this.mark);
    console.log('model telefonu: ' + this.model);
    console.log('kolor: ' + this.color);
    console.log('cena: ' + this.price);

    alert('marka telefonu: ' + this.mark + ', ' +
        "model telefonu: " + this.model + ', ' +
        'kolor: ' + this.color + ', ' +
        'cena: ' + this.price + ', '
    );
};
Phone.prototype.setDiscount = function(value) {
    return this.price -= value;
};


var iPhone = new Phone('iPhone', 'X', 'black', 3000);
var nexus = new Phone("Nexus", 5, 'black', 2000);
var samsung = new Phone('Samsung', 's10', 'white', 2300);




$('#jq-iphone').click(function() {
    iPhone.view();
    iPhone.setDiscount(100);
    iPhone.view();
});
$('#jq-nexus').click(function() {
    nexus.view();
    nexus.setDiscount(320);
    nexus.view();
});
$('#jq-samsung').click(function() {
    samsung.view();
    samsung.setDiscount(430);
    samsung.view();
});