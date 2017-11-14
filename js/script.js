function Phone(mark, model, color, price) {
    this.mark = mark;
    this.model = model;
    this.color = color;
    this.price = price;
};

Phone.prototype.view = function() {
    console.log("marka telefonu: " + this.mark);
    console.log("model telefonu: " + this.model);
    console.log("kolor: " + this.color);
    console.log("cena: " + this.price);

    alert("marka telefonu: " + this.mark + ", " +
        "model telefonu: " + this.model + ", " +
        "kolor: " + this.color + ", " +
        "cena: " + this.price + ", "
    )
};

var iPhone = new Phone('iPhone', 'X', 'black', 3000);
var Nexus = new Phone("Nexus", 5, "black", 2000);
var Samsung = new Phone("Samsung", "s10", 'white', 2300);




$('#jq-iphone').click(function() {
    iPhone.view();
});
$('#jq-nexus').click(function() {
    Nexus.view();
});
$('#jq-samsung').click(function() {
    Samsung.view();
});