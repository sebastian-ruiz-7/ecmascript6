//Example 1 (default parameters in a function)
function newFunction(name,age,country){
    var name=name ||'Sebastián';
    var age=age ||21;
    var country=country|| 'México';
    console.log(name,age,country);
}


//How to do it with ES6
function newFunctionES6(name='Sebastián',age=21,country='México'){
    console.log(name,age,country);
}

newFunctionES6(); //This functions is executed with the default parameters given when we created the function
newFunctionES6('Aldo',25,'México'); //This function is executed with the given parameters 


//Example 2 (Use of ``)
let hello='Hello';
let world='World';
let epicPhrase=hello + ' ' + world;
console.log(epicPhrase);
//How to do it with ES6
let epicPhraseES6=`${hello} ${world}`;
console.log(epicPhraseES6);

//This is the way that multiline was used
let lorem = 'I want to write a epic phrase for split it \n'
+ 'Another epic pharase that we need. \n '
+ 'Hello World';

//Now with ES6, multiline is used like this
let loremES6=`Another epic pharase that we need
Hello World`;

console.log(lorem);
console.log(loremES6);


//HERE BEGINS CLASS 2

//Now the destructuring of elements will be analyzed
let person = {
    name:'Sebastián',
    age:32,
    country:'México'
};

//This is the way to get property from the 'person' object
console.log(person.name, person.age); //Suppose I just need name and the age of the object

//But with ES6 we can get it from another way
let {name,age,country}=person;
console.log(age,country); //Suppose I just need age and country of the object


//Another element added is the spread operator. This operator allows us expand of certain situations several elements.
//This is one example of spread operator. 

//We have some elements separately and we want to unite into one
let team1=['Sebastián','Sunem','Oswaldo'];
let team2=['Ulises','Jael','Nacho'];

let amigos=[...team1,...team2];
console.log(amigos);


//This is an example to understand the differences between var and let, and when use each of them
{
    var globalVar='Global Var';
}

{
    let globalLet='Global Let';
    console.log(globalLet); //Here we can access to globalLet because we are using it in the scope where is declared
}

console.log(globalVar); //Var can be used from the global scope.
//console.log(globalLet); //This line brings an error, because let only exits in the scope where is declarated


const a='b';
//a='c'; //This brings an error because const can't be reassigned
console.log(a);

