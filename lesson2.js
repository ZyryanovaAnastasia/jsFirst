// Задание 1
console.log("ЗАДАНИЕ 1 \n"); 

var a = 1, b = 1, c, d;
c = ++a; console.log(c);           // 2 a+1 и возвращает результат ПОСЛЕ вычисления
d = b++; console.log(d);           // 1 b+1 и возвращает результат ДО вычисления, т.е. b
c = (2+ ++a); console.log(c);      // c = 2 + (2+1) = 5  a=2, т.к. ранее вызывали ++a
d = (2+ b++); console.log(d);      // d = 2 + (2) = 4  b=2, т.к. ранее вызывали ++b
console.log(a);                    // 3 ранее трижды вызвали ++a  
console.log(b);                    // 3 ранее трижды вызвали ++b

// Задание 2 
console.log("\nЗАДАНИЕ 2 \n"); 
var y = 2;
var x = 1 + (y *= 2); // x = 1 + ( 2 * 2 ) = 5
console.log(x)

// Задание 3 
console.log("\nЗАДАНИЕ 3 \n"); 

let f = 1, g = 2, n;
if ( f >= 0 && g >= 0) {
    n = f - g;
    console.log(`разность: ${c}`);
} else if (f < 0 && g < 0) {
    n = f * g;
    console.log(`произведение: ${c}`);
} else if ( (f >= 0 && g < 0) || (f < 0 && g >= 0)) {
    n = f + g;
    console.log(`сумма: ${c}`);
}

// Задание 4
function plus(a, b) {
    const result = a + b;
    return result;
}

function minus(a, b) {
    const result = a - b;
    return result;
}

function division(a, b) {
    const result = a / b;
    return result;
}

function multiplication(a, b) {
    const result = a * b;
    return result;
}

// Задание 5
console.log("\nЗАДАНИЕ 4-5 \n"); 
function mathOperator(arg1, arg2, operator) {
    switch (operator) {
        case 'сложение': 
            return plus(arg1, arg2);
        case 'вычитание': 
            return minus(arg1, arg2);
        case 'деление': 
            return division(arg1, arg2);
        case 'умножение': 
            return multiplication(arg1, arg2);
        default: 
            console.error("Введена неизвестная операция");
            break;
    }
}
mathOperator(1,5,"сложение")


// Задание 6
console.log("\nЗАДАНИЕ 6 \n"); 
function getCountMoneyFromConsole() {
    var readline = require('readline');
    var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question("Введите сумму ", function(sum) {
        const lastCh = sum[sum.length - 1];
        const penultCh = sum[sum.length - 2];
        if (penultCh == 1) { // для 111-119 рублей. Не придумала как в свитч добавить
            console.log(`"Ваша сумма в ${sum} рублей успешно зачислена."`);
            rl.close();
            return;
        }
        switch(lastCh) {
            case '1':
                console.log(`"Ваша сумма в ${sum} рубль успешно зачислена."`);
                break;
            case '2':
            case '3':
            case '4':
                console.log(`"Ваша сумма в ${sum} рубля успешно зачислена."`);
                break;
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
                console.log(`"Ваша сумма в ${sum} рублей успешно зачислена."`);
                break;
        }
        rl.close();
    });
}
getCountMoneyFromConsole();
