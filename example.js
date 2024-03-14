//array //objest // array of object
// create one person details types
var person = {
    fullName: "string",
    age: "number",
    class: "number",
    rollNo: "number",
    email: "string",
    isPassed: "boolean",
    feeschedule: {
        month: "string",
        amount: "number",
    },
    address: {
        city: "string",
        country: "string",
    }
};
console.log(person);
//one person details
var person1 = {
    fullName: "ayzal",
    age: 14,
    class: 9,
    rollNo: 601,
    email: "haya123@gmail.com",
    isPassed: true,
    feeschedule: {
        month: "march 2024",
        amount: 6000,
    },
    address: {
        city: "lahore",
        country: "Pakistan",
    }
};
console.log(person1);
// f0r specific thing
console.log(person1.fullName);
console.log(person1.email);
console.log(person1.isPassed);
//concatination
console.log(person1.address.city + person1.address.country);
//for two cartoons
var cartoons = {
    character1: {
        mainCharachter: "doraemon",
        totalEpisodes: 1787,
        otherCharacter: ["nobita", "shizuka", "suneo"],
        startingYear: 2005,
    },
    character2: {
        mainCharacter: "micky mouse",
        totalEpisodes: 94,
        othercharacter: ["mikkihiiri", "mr.mouse"],
        startingYear: 1920,
    }
};
console.log(cartoons);
