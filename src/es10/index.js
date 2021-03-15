//The new in ES10

//.flat() for arrays
//This method allows us flat a matrix with differents sublevels.
let array=[1,2,3,[1,2,3,[1,2,3]]];

console.log(array.flat());//If we not pass any parameter to this function. By default, it will flat 1 level
//OUTPUT:[1,2,3,1,2,3,[1,2,3]]

console.log(array.flat(2));//This will flat the arrays until the second level
//OUTPUT:[1,2,3,1,2,3,1,2,3]


//.flatMap() for arrays
let array= [1,2,3,4,5];

console.log(array.flatMap(value=>[value,value*2]));
//OUTPUT:[1, 2, 2, 4,  3,  6, 4, 8, 5, 10]


//Trim start
//This allows us remove the empty space
let hello='            hello world';
console.log(hello);
console.log(hello.trimStart());


let hello='hello world            ';
console.log(hello);
console.log(hello.trimEnd());


//optional catch biulding
//Before ES10
try{

}catch(error){
    error
}

//With ES10
try{

}catch{ //The error parameter it is not needed any more
    error
}


//fromEntries
//Transform clave-value un object. We can transform an array in one object

let entries=[['name','Sebastián'],['age',21]];
console.log(Object.fromEntries(entries));
//OUTPUT:{ name: 'Sebastián', age: 21 }

//Object symbol type
let mySymbol='My Symbol';
let symbol=Symbol(mySymbol);
console.log(symbol.description);//Allows us see what type of element is inside of the symbol