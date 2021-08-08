// 1.1 Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры наследования -> типы на es5 и es6)
// es6 

'use strict';

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price -= this.price*0.15;
    }
}

let obj1 = new Product("phone", 5000);
obj1.make25PercentDiscount();
console.log(obj1);