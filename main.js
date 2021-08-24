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
