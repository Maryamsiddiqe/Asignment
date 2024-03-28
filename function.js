//function 
function logPlanetName() {
    var planetName = "mars";
    console.log(planetName);
}
//calling statement
logPlanetName();
function laptopName() {
    var laptop = "hp 10 generation";
    console.log(laptop);
}
laptopName();
//parantysis
function travelJourney(destination, car, hotel, dinner) {
    console.log(destination, car, hotel, dinner);
}
travelJourney("skardo", "civic", "lorence", "chowmein");
//return parameters
function greet(name) {
    return "WELCOME, ".concat(name);
}
console.log(greet("Maryam Siddique"));
// multipilication , addition ,subtraction ,division 
//multipilication
function mult(x, y) {
    return x * y;
}
console.log(mult(12, 4));
//addition
function add(x, y) {
    return x + y;
}
console.log(add(13, 2));
//subtraction
function sub(x, y) {
    return x - y;
}
console.log(sub(8, 5));
//division
function div(x, y) {
    return x / y;
}
console.log(div(18, 6));
