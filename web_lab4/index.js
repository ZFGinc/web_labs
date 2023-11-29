function PageConstuct(){
    appendInPage("insert-1", "y(2) = " + zad1(2));
    appendInPage("insert-1", "y(-3) = " + zad1(-3));

    appendInPage("insert-2", zad2(1223));
    appendInPage("insert-2", zad2(6996));

    appendInPage("insert-3", zad3(2000));
    appendInPage("insert-3", zad3(2023));

    appendInPage("insert-4", "y(-2) = " + zad4(-2));
    appendInPage("insert-4", "y(-0.6) = " + zad4(-0.6));
    appendInPage("insert-4", "y(-1) = " + zad4(-1));

    appendInPage("insert-5", zad5(1));
    appendInPage("insert-5", zad5(5));
    appendInPage("insert-5", zad5(11));
    appendInPage("insert-5", zad5());

    appendInPage("insert-6", zad6(9, 2));
    appendInPage("insert-6", zad6(11, 3));
    appendInPage("insert-6", zad6(7, 1));

    appendInPage("insert-7", "1984: " + zad7(1984));
    appendInPage("insert-7", "2001: " + zad7(2001));

    appendInPage("insert-8", zad8());

    appendInPage("insert-9", zad9());

    appendInPage("insert-10", "a = 4;<br>b = 8;<br><br>" + zad10(4,8) + "<br>");
    appendInPage("insert-10", "a = 45;<br>b = 13;<br><br>" + zad10(45,13) + "<br>");

    appendInPage("insert-11", "n = 5: " + zad11(5));
    appendInPage("insert-11", "n = 18: " + zad11(18));

    appendInPage("insert-12", "a) (x,y) = (4,7): " + zad12_1(4,7));
    appendInPage("insert-12", "b) (x,y) = (4,7): " + zad12_2(4,7));

    appendInPage("insert-13", "3^2 = " + zad13(3));
    appendInPage("insert-13", "8^2 = " + zad13(8));
    appendInPage("insert-13", "10^2 = " + zad13(10));

    appendInPage("insert-14", zad14());

    appendInPage("insert-15", "Последовательность: " + [1,4,2,4,6,3]);
    let res = zad15([1,4,2,4,6,3]);
    appendInPage("insert-15", "a) " + res[0]);
    appendInPage("insert-15", "b) " + res[1]);

    appendInPage("insert-16", "Последовательность: " + [1,7,2,4,6,-1]);
    appendInPage("insert-16", "Среднее арифметическое: " + zad16([1,7,2,4,6,-1]));

    appendInPage("insert-17", "1234: <br>" + zad17(1234)+"<br>");
    appendInPage("insert-17", "895710533: <br>" + zad17(895710533));

    appendInPage("insert-18", "Введенное число: 50291");
    appendInPage("insert-18", zad18(50291));

    appendInPage("insert-19", zad19(1));
    appendInPage("insert-19", zad19(4));
    appendInPage("insert-19", zad19(7));
    appendInPage("insert-19", zad19(17));
    appendInPage("insert-19", zad19(18));

    appendInPage("insert-20", zad20(1478));
    appendInPage("insert-20", zad20(1557));
    appendInPage("insert-20", zad20(1648));

    appendInPage("insert-21", zad21([1,4,6,8,12,17], 16));
    appendInPage("insert-21", zad21([1,4,6,8,12,17,18,28,45,67], 16));
    appendInPage("insert-21", zad21([1,4,6,8,12], 12));

    appendInPage("insert-22", zad22(11222, 1, 2));
    appendInPage("insert-22", zad22(111222, 1, 2));
    appendInPage("insert-22", zad22(11122, 1, 2));

    appendInPage("insert-23", zad23());
}

function appendInPage(where, that, isBr = true){
    if(isBr) document.getElementById(where).innerHTML += that + "<br>";
    else document.getElementById(where).innerHTML += that;
}

function zad1(x) {
    if (x > 0)
        return Math.sin(x) ** 2;

    return 1 - 2 * Math.sin(x) ** 2;
}

function zad2(n) {
    if (n <= 0 || n > 9999)
        return "n должно быть натуральным"

    const num = n.toString().split('');

    for (let i = 0, j = num.length - 1; i < j; i++, j--) {
        if (num[i] != num[j]) {

            return `${n} - не палиндром`;
        }
    }

    return `${n} - палиндром`;
}

function zad3(year) {
    if (year % 4 == 0)
        if (year % 100 != 0)
            return `${year} - високосный год`;
        else if (year % 400 == 0)
            return `${year} - високосный год`;

    return `${year} - невисокосный год`;
}

function zad4(x) {
    if (x < - 1) return -1;
    if (x > - 1) return x;
    if (x == - 1) return 1;
}

function zad5(m) {

    const Winter = () => "Зима";
    const Spring = () => "Весна";
    const Summer = () => "Лето";
    const Fall = () => "Осень";

    const months = {
        12: Winter(),
        1: Winter(),
        2: Winter(),
        3: Spring(),
        4: Spring(),
        5: Spring(),
        6: Summer(),
        7: Summer(),
        8: Summer(),
        9: Fall(),
        10: Fall(),
        11: Fall(),
        'default': 'Неизвестный месяц',
    }

    let month = (months[m] || months['default'])
    return month;
}

function zad6(m, k) {

    const Cards = {
        6: 'Шестерка',
        7: 'Семерка',
        8: 'Восьмерка',
        9: 'Девятка',
        10: 'Десятка',
        11: 'Валет',
        12: 'Дама',
        13: 'Король',
        14: 'Туз',
    }

    const Suits = {
        1: 'пик ♠',
        2: 'треф ♣',
        3: 'бубен ♦',
        4: 'червей ♥',
    }

    let card = Cards[m] ?? 'Неизвестная карта';
    let suit = Suits[k] ?? 'неизвестной масти';

    return card + " " + suit;
}

function zad7(n) {
    if (n <= 0)
        return "Неверный год";

    let animals = ["Крыса", "Бык", "Тигр", "Кролик", "Дракон", "Змея",
        "Лошадь", "Овца", "Обезьяна", "Петух", "Собака", "Свинья"];
    let colors = ["Белый", "Черный", "Зеленый", "Красный", "Желтый"];

    let res = "";
    n += 20;

    res += animals[n % 12] + ", ";
    res += colors[Math.floor((n % 10) / 2)];

    return res;
}

function zad8() {
    let res = "";

    for (let i = 1; i <= 10; i++) {
        res += `9 * ${i} = ${i*9}<br>`;
    }

    return res;
}

function zad9() {
    let res = "";
    for (let i = 2; i <= 20; i++) {
        res += `sin ${i} = ${Math.sin(i)}<br>`;
    }

    return res;
}

function zad10(a, b) {
    function sumOfAP(a, b) {
        return (a + b) / 2 * (b - a + 1); 
    }

    let A = sumOfAP(100, 500);
    let B = sumOfAP(a, 500);
    let C = sumOfAP(-10, b);
    let D = sumOfAP(a, b);

    return `a) ${A}<br>б) ${B}<br>в) ${C}<br>г) ${D}`;
}

function zad11(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += 1 / i;
    }

    return sum;
}

function zad12_1(x, y) {
    let sum = 0;

    for (let i = 0; i < y; i++) {
        sum += x;
    }

    return sum / 2;
}

function zad12_2(x, y) {
    let sum = 0;
    let i = 0;
    do {
        i++;
        sum += x;
    } while (i < y);

    return sum / 2;
}

function zad13(x) {
    return (2 + 2 * (x - 1)) / 2 * x;
}

function zad14() {
    let sum = 0;
    for (let i = 50; i >= 1; i--) {
        sum = Math.sqrt(sum + i);
    }

    return sum;
}

function zad15(n) {
    let sum = n.reduce((sum, x) => sum += x);
    let len = n.length;

    return [sum, len];
}

function zad16(n) {
    let sum = 0;

    for (let i = 0; i < n.length - 1; i++) {
        sum += n[i];
    }

    return sum / (n.length - 1)
}

function zad17(n) {
    n = n.toString().split('').map(Number);

    let A = n.reduce((total, elem) => {
        return (elem === 3 ? total + 1 : total)
    }, 0);

    let B = n.reduce((total, elem) => {
        return (elem === n[n.length - 1] ? total + 1 : total)
    }, 0);

    let C = n.reduce((total, elem) => {
        return (elem % 2 === 0 ? total + 1 : total)
    }, 0);

    let D = 0, E = 1;
    for (let i = 0; i < n.length; i++) {
        if (n[i] > 5) D+=n[i];
        if (n[i] > 7) E*=n[i];
    }

    let F = n.reduce((total, elem) => {
        return ((elem === 0 || elem === 5) ? total + 1 : total)
    }, 0);

    return `a) кол-во 3: ${A}<br>`+
           `б) кол-во повторений ${n[n.length - 1]}: ${B}<br>`+
           `в) кол-во четных: ${C}<br>`+
           `г) сумма цифр, больших 5: ${D}<br>`+
           `д) произведение цифр больших 7: ${E}<br>`+
           `е) кол-во повторений 0 и 5: ${F}`;
}

function zad18(n) {
    n = n.toString().split('').map(Number);

    let A = n.indexOf(Math.max.apply(null, n));
    let B = n.indexOf(Math.min.apply(null, n));

    return `a) порядковый номер максимальной цифры: ${A}<br>`+
           `б) порядковый номер минимальной цифры: ${B}<br>`;
}

function zad19(n) {
    let res = false;
    if (n == 1)
        return `${n} - является простым числом`;

    let del = 1;
    while (n % ++del != 0);

    res = del == n ? true : false;

    if (res) return `${n} - является простым числом`;
    else return `${n} - не является простым числом`;
}

function zad20(n) {
    let t = n;
    n = n.toString().split('').map(Number);

    let prev = -1;
    for (const elem of n) {
        if (elem > prev) {
            prev = elem;
        }
        else
            break;
    }

    if (prev == n[n.length - 1])
    return `${t} - цифры упорядочены`;

    return `${t} - цифры не упорядочены`;
}

function zad21(nums, n) {
    let idx = nums.findIndex(x => x > n);

    let res = idx != -1;
    return res ? `${nums} : ${idx} - первое число, которое больше ${n}` : `${nums} : не найдено число, больше ${n}`;
}

function zad22(n, a, b) {
    let t = n;
    n = n.toString().split('').map(Number);

    let countA = 0, countB = 0;

    n.forEach(element => {
        if (element === a) countA++;
        if (element === b) countB++;
    })

    let res = countA > countB;

    if (res) return `${t}: цифра ${a} встречается чаще, чем цифра ${b}`;
    else return `${t}: цифра ${b} встречается чаще, чем цифра ${a}`;
}

function zad23() {
    let start = 10;
    let end = 30;
    let A = "", B = "";
    while (start <= end) {
        A += start++ + " ";
    }

    start = 10;

    do {
        B += start + " ";
    } while (start++ < end);

    return `a) ${A}<br>`+
           `б) ${B}`;
}