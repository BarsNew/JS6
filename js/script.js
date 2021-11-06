/* N1
Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального 
поиска и замены. */

let text = 'aaa@bbb@ccc';

let textNew = text.replace(/@/g, '!');

console.log(textNew);

// Способ через цикл:

let text2 = [];

for (let i = 0; i < text.length; i++) {

    let x = text[i];

    if (x == '@') x = '!';

    text2.push(x);
}

text2 = text2.join('');

console.log(text2);

// Через замкнутую функцию

function replaceText(word, q = 0, text3 = ' ') {

    let x = word[q];

    if (x == '@') x = '!';

    text3 += x;

    q++;

    if (q > word.length-1) return text3;

    replaceText(word, q, text3);
}

console.log(replaceText(text));

//Дополнительный способ:

console.log(text.indexOf('@'));      // 3
console.log(text.lastIndexOf('@'));  // 7

let text4 = text.split('');
text4[3] = '!';
text4[7] = '!';
text4 = text4.join('');
console.log(text4);


/* №2
В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту 
дату в формат 31/12/2025 */

let date = '2025-12-31';

date = date.replace(/(2025)-(12)-(31)/, '$3/$2/$1');

console.log(date);


/* №3
Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово 
«javascript» тремя разными способами (через substr, substring, slice). */

let word = 'Я учу javascript!';

let word1 = word.substr(2,3);
let word2 = word.substring(2,5);
let slice = word.slice(2, 5);

console.log(word1);
console.log(word2);
console.log(slice);

/*
let word0 = new String ('Я учу javascript!');
delete word0[16];
console.log(word0[16]);
*/

let word3 = word.substr(6, (word.length - 1) - 6);
let word4 = word.substring(6, word.length-1);
let word5 = word.slice(6, word.length-1);

console.log(word3);
console.log(word4);
console.log(word5);


/* №4
Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень 
из суммы кубов его элементов. Для решения воспользуйтесь циклом for. */

let array = [4, 2, 5, 19, 13, 0, 10];

let cub = 0;

for (let i = 0; i < array.length; i++) {

    let j = Math.pow(array[i], 3);
    // или  let j = array[i] ** 3;

    cub += j;
}

cub = Math.sqrt(cub);

console.log(cub);


/* №5 
Даны переменные a и b. Отнимите от a переменную b и результат 
присвойте переменной c. Сделайте так, чтобы в любом случае в переменную 
c записалось положительное значение. Проверьте работу скрипта при a и b, 
равных соответственно 3 и 5, 6 и 1. */

function diff(a, b) {

    let c = Math.abs(a - b);

    return c;
}

console.log(diff(3, 5));
console.log(diff(6, 1));

// Ещё способ

function diff1(a, b) {

    let c = a - b;

    if (c < 0) c = -c;

    return c;
}

console.log(diff1(0, 5));


/* №6
Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. 
Для решения этой задачи напишите функцию, которая будет добавлять 0 
перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 
сделает 01.09.2014). */

let today = new Date().toLocaleString();

today = today.replace(/(.*), (.*)/, '$2 $1');

console.log(today);


let dateOld = '1.9.2014'; 

function dat(str) {

    let dateNew = new Date();

    let [,day,month,year] = str.match(/([0-9]+).([0-9]+).([0-9]+)/);

    dateNew.setDate(day);

    dateNew.setMonth(month);

    dateNew.setFullYear(year);

    let opt = {

        year: 'numeric',
        month: 'numeric',
        day: 'numeric'  
    }

    dateNew = dateNew.toLocaleString('ru', opt);

    return dateNew;
}

document.write(dat(dateOld));
console.log(dat(dateOld));


/* №7
Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая 
найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое 
количество раз, буква 'a'. */

let str = 'aa aba abba abbba abca abea'.match(/a[b]+a/g);

console.log(str);


/* №8
Напишите ф-цию строгой проверки ввода номер телефона в 
международном формате (<код страны> <код города или сети> <номер 
телефона>). Функция должна возвращать true или false. Используйте 
регулярные выражения. */

let phone = '+375 29 1234571'; 

function validat(val) {

    let valid = /^[+]375\s?(29|44|33|25)\s?[0-9]{7}$/.test(val);

    if (valid == false) {

        result = false;
        return result;
    }

    result = true;
    return result;
}
    
console.log(validat(phone));


/* №9
Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих 
условия:
- весь адрес не должен содержать русские буквы и спецсимволы, кроме 
одной «собачки», знака подчеркивания, дефиса и точки;
- имя эл. почты (до знака @) должно быть длиной более 2 символов, причем 
имя может содержать только буквы, цифры, но не быть первыми и 
единственными в имени;
- после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)
не может быть длиной менее 2 и более 11 символов.

Функция должна возвращать true или false. Используйте регулярные 
выражения. */

function validEmail(a) {

    let regex = /^[a-z]+[0-9_-a-z]+@[a-z0-9_-]{2,11}.[a-z]{2,11}$/ig;

    let valid = regex.test(a);

    let result = false

    if (valid == true) result = true;

    return result;
}

console.log(validEmail('gg2_@vbf-f_d.com'));


/* №10
Напишите ф-цию, которая из полного адреса с параметрами и без, 
например: https://tech.onliner.by/2018/04/26/smart-do-200/? 
utm_source=main_tile&utm_medium=smartdo200#zag3 , получит адрес 
доменного имени (https://tech.onliner.by), остальную часть адреса без 
параметров (/2018/04/26/smart-do-200/), параметры 
(utm_source=main_tile&utm_medium=smartdo200) и хеш (#zag3). В адресе 
может и не быть каких-либо составляющих. Ф-ция должна возвращать 
массив. */

let url = 'http://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3';

function validUrl(u) {

    regex = '^https?:\/\/[w{3}\.]?(.*by|ru|com)/(.*)[\?](.*)#(.*)';

    let array = u.match(regex);

    array.shift(0);

    return array;
}

console.log(validUrl(url));



