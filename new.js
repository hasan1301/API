class person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

let normalPerson = new person('Hasan', 'Khan', 8000);
console.log(normalPerson);

let otherPerson = new person('Mr.', 'Kuddus', 20000);
console.log(otherPerson);