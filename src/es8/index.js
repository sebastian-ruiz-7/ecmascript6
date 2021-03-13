//In this class the new in ES8 will be studied

//Object.entries

const data ={
    frontend:'Sebastián',
    backend:'Aldo',
    desing:'Sunem'
};

const entries=Object.entries(data);
console.log(entries); //Print all matrix    
//OUTPUT: [ [ 'frontend', 'Sebastián' ], [ 'backend', 'Aldo' ], [ 'desing', 'Sunem' ] ]

console.log(entries[0][0]); //Print only the element of the matrix 
//OUTPUT: frontend

console.log(entries[0].length); //Returns the numbers of elements
//2

//Object values
//Returns the values of an object in an array
const data ={
    fronten:'Sebastián',
    backend:'Aldo',
    desing:'Sunem'
};

const values=Object.values(data);
console.log(values);
//OUTPUT: [ 'Sebastián', 'Aldo', 'Sunem' ]


//Padding
//Used to change a sting

const string='hello';
console.log(string.padStart(8,'hi ')); //The first parameter is the max number of character in the string. The second one is the characther added
//OUTPUT: 'hi hello

console.log(string.padEnd(11,' world')); //Add the characther at the end of the original string
//OUTPUT: 'hello world'

