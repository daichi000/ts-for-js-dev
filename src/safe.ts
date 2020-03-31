export {};

const kansu = (): number => 32;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

if ( typeof numberUnknown === 'number') {
    let sumAny = numberUnknown + 10;
}

let day: '日' | '月' = '日';
day = '32'

let month: number = 1;
month = 32

enum Month {
    Jan = 1,
    Feb,
    Mar,
    Apr,
}
console.log(Month.Jan);

enum COLORS {
    RED = '#FF0000',
    WHITE = '#FFFFFF'
}

let green = COLORS.WHITE;