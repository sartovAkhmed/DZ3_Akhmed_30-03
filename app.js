/* ⁃ дан массив [123, 234, 256, 345, 456, 567, 543, 67, 55, 23, 28, 50]. 
Пройдитесь циклом и выведите только те числа, которые начинаются на 2 и 5. 
Результат должен вывестись в новом массиве newArray */
var arrayNumber = [123, 234, 256, 345, 456, 567, 543, 67, 55, 23, 28, 50];
var newArray = [];
for(var i = 0; i < arrayNumber.length; i++){
    var arrayNumberStr = arrayNumber[i].toString()
    if (arrayNumberStr.startsWith('2') || arrayNumberStr.startsWith('5')) {
        newArray.push(arrayNumber[i])
    }
}
console.log(newArray);

/* ⁃ Написать функцию (любой из видов пройденных на уроке), 
которая принимает аргумент и возвращает его тип данных в консоли.
Пример:    
getDataType(false) => boolean    
getDataType('hello world!') => string
getDataType(42) => number */
function argumentsTypeOf(params) {
    console.log(typeof params);
}
argumentsTypeOf();

/* ⁃ Дан список тегов  ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol’, ‘br’]. 
Вам нужно посчитать каких тегов сколько штук.  Обязательные условия:  
1. Конечный результат должен вывестись как объект {}, где ключ - это сам тег, 
а значение - это количество сколько раз этот тег встречается в массиве.  */
var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br'];
function listTags(tags) {
    var listTagObject = {};
    for(var tag of tags) {
        if (listTagObject[tag]) {
            listTagObject[tag]++;
        } else {
            listTagObject[tag] = 1;
        }
    }
    return listTagObject;
}
console.log(listTags(tags));