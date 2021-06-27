let newPerson = {
    firstName: 'Hasan',
    lastName: 'Khan',
    salary: 8700,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },
    bill: function (amount) {
        this.salary = this.salary - amount;
        return this.salary
    }
}

let heroPerson = {
    firstName: 'Mr.',
    lastName: 'Khan',
    salary: 20000,
}

// let heroPersonBill = newPerson.bill.bind(heroPerson);
newPerson.bill.call(heroPerson, 2000)

let normalPerson = {
    firstName: 'Hasib',
    lastName: 'Khan',
    salary: 10000,
}

// let normalPersonBill = newPerson.bill.bind(newPerson);

// newPerson.bill(1100);
// newPerson.bill(1000);
console.log(newPerson.salary + ' ' + 'new person salary exp.');

// heroPersonBill(2000)
console.log(heroPerson.salary + ' ' + 'hero person salary exp.');

// normalPersonBill(3500)
console.log(normalPerson.salary + ' ' + 'normal person salary exp.');

