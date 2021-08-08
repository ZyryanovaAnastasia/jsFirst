// 1.1 Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры наследования -> типы на es5 и es6)
//es5

'use strict';

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function() {
    this.price -= this.price*0.15;
};

let phones = new Product("htc", 5000);
obj1.make25PercentDiscount();
console.log(obj1);