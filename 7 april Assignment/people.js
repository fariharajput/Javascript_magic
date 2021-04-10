const people = [
    { firstName: 'Sam', lastName: 'Hughes', AGE: 35, department: 'Development', salary: '45000' },
    { firstName: 'Terri', lastName: 'Bishop', AGE: 28, department: 'Development', salary: '35000' },
    { firstName: 'Jar', lastName: 'Burke', AGE: 45, department: 'Marketing', salary: '38000' },
    { firstName: 'Julio', lastName: 'Miller', AGE: 55, department: 'Sales', salary: '40000' },
    { firstName: 'Chester', lastName: 'Flores', AGE: 39, department: 'Development', salary: '41000' },
    { firstName: 'Madison', lastName: 'Marshall', AGE: 27, department: 'Sales', salary: '32000' },
    { firstName: 'Ava', lastName: 'Pena', AGE: 23, department: 'Development', salary: '38000' },
    { firstName: 'Gabriella', lastName: 'Steward', AGE: 29, department: 'Marketing', salary: '46000' },
    { firstName: 'Charles', lastName: 'Campbell', AGE: 31, department: 'Sales', salary: '42000' },
    { firstName: 'Tiffany', lastName: 'Lambert', AGE: 39, department: 'Development', salary: '34000' },
    { firstName: 'Antonio', lastName: 'Gonzalez', AGE: 60, department: 'Office Management', salary: '49000' },
    { firstName: 'Aaron', lastName: 'Garrett', AGE: 32, department: 'Development', salary: '39000' },
];

// Exercises

// 1) Calculate the average income of all the people in the array?
const totalPeople = people.length;
const avgSalary = people.forEach((person) => {
    console.log(`Average salary of ${person.firstName} is ${(person.salary/totalPeople).toFixed(2)}`);
});


// 2) Who are the people that are older than 30 right now?
const older30 = people.filter((person) => {
    if (person.AGE > 30) {
        console.log(`${person.firstName}'s age is ${person.AGE}`);    
    }    
});


// 3) Get a list of the people's full name (firstName and lastName).
let peopleList = [];

const nameList = people.forEach((person) => {
    peopleList.push(`${person.firstName} ${person.lastName}`);
});

console.log(peopleList);


// 4) Get a list of people in the array ordered from youngest to oldest.
const sortedList = people.sort((a, b) => a.AGE - b.AGE);
console.log(sortedList);

// 5) How many people are there in each department?
count = function (ary, classifier) {
    classifier = classifier || String;
    return ary.reduce(function (counter, item) {
        let p = classifier(item);
        counter[p] = counter.hasOwnProperty(p) ? counter[p] + 1 : 1;
        return counter;
    }, {})
};

let countByDept = count(people, function (dept) {
    return dept.department
});
console.log(countByDept);

