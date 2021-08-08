"use strict";

// Задание 1
function ex1() {
    console.log("ЗАДАНИЕ 1 \n"); 
    for(let i = 0; i <= 10; i++) {
        if (i === 0) {
            console.log(`${i} - это ноль`);
            continue;
        }
        if (i%2 === 0) {
            console.log(`${i} - это четное число`);
            continue;
        } else {
            console.log(`${i} - это нечетное число`);
            continue;
        }
    }
}

ex1();

// Задание 2
function ex2() {
    console.log("\nЗАДАНИЕ 2 \n"); 
    const post = {
        author: "John", //вывести этот текст
        postId: 23,
        comments: [
            {
                userId: 10,
                userName: "Alex",
                text: "lorem ipsum",
                rating: {}
            },
            {
                userId: 5, //вывести это число
                userName: "Jane",
                text: "lorem ipsum 2", //вывести этот текст
                rating: {}
            },
        ]
    };

    console.log(`author - ${post.author}`);
    console.log(`userId - ${post.comments[1].userId}`);
    console.log(`text - ${post.comments[1].text}`)
}

ex2();

// Задание 3
function ex3() {
    console.log("\nЗАДАНИЕ 3 \n"); 
    const products = [
        {
            id: 3,
            price: 200,
        },
        {
            id: 4,
            price: 900,
        },
        {
            id: 1,
            price: 1000,
        },
    ];
    products.forEach(product => product.price -= product.price*0.15);
    console.log(products);
}

ex3();

// Задание 4
function ex4() {
    console.log("\nЗАДАНИЕ 4 \n"); 
    const products = [
        {
            id: 3,
            price: 127,
            photos: [
                "1.jpg",
                "2.jpg",
            ]
        },
        {
            id: 5,
            price: 499,
            photos: []
        },
        {
            id: 10,
            price: 26,
            photos: [
                "3.jpg"
            ]
        },
        {
            id: 8,
            price: 78,
        },
    ];

    const productsWithPhoto = products.filter(product => "photos" in product && product.photos.length > 0);
    console.log(`Продукты с фото:`);
    console.log(productsWithPhoto);
    products.sort(function(product1, product2) {
        return product1.price - product2.price;
    });
    console.log(`\nПродукты с сортировкой по возрастанию цены:`);
    console.log(products);
}

ex4(); 

// Задание 5
function ex5() {
    console.log("\nЗАДАНИЕ 5 \n"); 
    for (let i = 0; i < 10; console.log(i++)) { }
} 

ex5();

// Задание 6
function ex6() {
    console.log("\nЗАДАНИЕ 6 \n"); 
    for (let i = 1; i <= 20; i++) {
        console.log('x'.repeat(i));
    }
} 

ex6();