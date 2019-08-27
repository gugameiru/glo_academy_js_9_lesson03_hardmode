'use strict';

// Дни недели

let lang = 'en';

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

let dayOfWeeks = {'ru': 'понедельник, вторник, среда, четверг, пятница, суббота, воскресенье', 'en': 'monday, tuesday, wednesday, thursday, friday, saturday, sunday'};

console.log(dayOfWeeks[lang]);

// Имена

let namePerson = 'Максим';

let message = (namePerson == 'Артем') ? 'директор' : 
    (namePerson == 'Максим') ? 'преподаватель' : 
    'студент';

console.log(message);





