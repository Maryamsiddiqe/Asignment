// type of objects
type userType = {
    firstName: string ;
    lastName: string;
    cnicNo: string;
    isStudent: boolean;
    subjects: string[];
}
let user: userType = {
    firstName:"maryam",
    lastName: "siddique",
    cnicNo: "12345677",
    isStudent: true,
    subjects: ["english" , "physics",]
    
};
console.log(user);

//reusable code
interface addressType {
streetName: string;
city: string;
country: string;
zipcode: string ;
}

type persontype = {
    firstName: string ;
    lastName: string;
    cnicNo: string;
    isStudent: boolean;
    subjects : string[];
    address: addressType
};

let person: persontype = {
    firstName: "maryam",
    lastName: "siddique",
    cnicNo: "12345678",
    isStudent: true,
    subjects : ["english", "physeics"],
    address:{
        streetName:" Abc",
        city: "karachi",
        country: "pakistan",
        zipcode: " 123456",
    }

};
console.log(person);


// type alias
//number, string, boolean,
type mobilestring = string;


