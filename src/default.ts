export {};

// const nextYearSalary = (currentSalary: number, rate: number = 1.1) => {
//     return currentSalary * rate;
// }

// console.log(nextYearSalary(1000));

// const sum = (...value: number[]) => {
//     return 100;
// }
// sum(1,2,3,4,5);

function double(value: number): number;
function double(value: string): string;

function double(value: any): any {
    if(typeof value === 'number') {
        return value * 2;
    }else {
        return value + value;
    }
    
}

console.log(double(100));
console.log(double('100'));