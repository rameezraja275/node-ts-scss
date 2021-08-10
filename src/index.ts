import data from './data.json'
console.log(data)

interface IStudent {
    name: string;
    age: number;
}

const students: Array<IStudent> = [{
    name: "rameez",
    age: 27,
    
}, {
    name: "ahmad", 
    age: 30
}];

for (let i = 0; i < students.length; i++) {
    console.log("heelow");
}