let sumSalary = 0;
class Worker {
    constructor(firstName, secondName, rate, days) {
        this.name = firstName;
        this.surname = secondName;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        sumSalary += this.rate * this.days
        return this.rate * this.days
    }
}
const worker1 = new Worker('Ivan', 'Ivanov', 10, 31);
console.log(worker1.name);
console.log(worker1.surname);
console.log(worker1.rate);
console.log(worker1.days);
console.log(worker1.getSalary());

const worker2 = new Worker('Petro', 'Ivanov', 12, 10);
console.log(worker2.name);
console.log(worker2.surname);
console.log(worker2.rate);
console.log(worker2.days);
console.log(worker2.getSalary());
console.log(sumSalary);