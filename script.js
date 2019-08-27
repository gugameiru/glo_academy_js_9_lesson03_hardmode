'use strict';

// Дни недели

let lang = 'ru';

if (lang == 'ru') {
    console.log('понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
} else if (lang == 'en') {
    console.log('monday, tuesday, wednesday, thursday, friday, saturday, sunday');
}

switch (lang) {
    case 'ru':
        console.log('понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
        break;
    case 'en':
        console.log('monday, tuesday, wednesday, thursday, friday, saturday, sunday');
        break;
    default:
        console.log('Something went wrong');
}

// Дни недели через ассоциативный массив

let dayOfWeeksAssociative = {'ru': 'понедельник, вторник, среда, четверг, пятница, суббота, воскресенье', 'en': 'monday, tuesday, wednesday, thursday, friday, saturday, sunday'};

console.log(dayOfWeeksAssociative[lang]);

// Дни недели через многомерный массив

let dayOfWeeksMultidimensional = [
    ['понедельник, вторник, среда, четверг, пятница, суббота, воскресенье'],
    ['monday, tuesday, wednesday, thursday, friday, saturday, sunday']
]

let dayOfWeeks = (lang == 'ru') ? dayOfWeeksMultidimensional[0] : (lang == 'en') ?  dayOfWeeksMultidimensional[1] : 'unknown';

console.log(dayOfWeeks.join());

// Имена

let namePerson = 'Артем';

let message = (namePerson == 'Артем') ? 'директор' : 
    (namePerson == 'Максим') ? 'преподаватель' : 
    'студент';

console.log(message);





