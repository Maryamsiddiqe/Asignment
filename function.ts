//function 

function logPlanetName(){
    let planetName: string = "mars";
    console.log(planetName);
}
//calling statement
logPlanetName()

function laptopName(){
    let laptop : string = "hp 10 generation";
    console.log(laptop);
}
laptopName()

//parantysis
function travelJourney(destination, car, hotel, dinner){
    console.log(destination, car,hotel , dinner);
}
travelJourney("skardo" , "civic" , "lorence" , "chowmein");

//return parameters
function greet(name: string){
    return `WELCOME, ${name}`;
}
console.log(greet("Maryam Siddique"));
// multipilication , addition ,subtraction ,division 
//multipilication
function mult(x: number , y:number){
    return x*y;
}
console.log(mult(12,4));
//addition
function add(x:number, y:number){
    return x+y;

}
console.log(add(13,2));

//subtraction

function sub(x:number , y: number){
    return x-y;

}
console.log(sub(8,5));

//division

function div(x: number , y:number){
    return x/y;

}
console.log(div(18,6));