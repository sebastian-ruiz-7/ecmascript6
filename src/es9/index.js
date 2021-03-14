//The new in ES9

//Rest operator
//This allows split the properties of an object without restructuring it
const obj={
    name:'Sebastián',
    age:21,
    country:'México',
};

//Here, I'm creating a new object but with the info that I only need. The parameters before '...info_obj' are the parameters that I want to separate
let {name,...info_obj}=obj; 
console.log(name,info_obj);//Suppose I don't need the name of the object, but I want see it
//OUTPUT: Sebastián { age: 21, country: 'México' }


//We can use the spread operator to join differents elements into one

const main_info={ //Suppose I make an objec with the main info of the user
    name:'Sebastián',
    age:21,
    country:'México',
};

const secondary_info={//We have the secondary info of the user in another obj
    occupation:'Engineer',
    number:3334956563,
}

//we want join into one

const all_info={
    ...main_info,
    ...secondary_info,
};

console.log(all_info);


//Promise.finally()
//With this we can know when a promise is ended.

const helloWorld=()=>{
    return new Promise((resolve,reject)=>{
        (true)
            ? setTimeout(()=>{resolve('Hello World')},3000)
            : reject(new Error('Test Error'))
    })
}

helloWorld()
    .then(response=>console.log(response))
    .catch(error=>console.log(error))
    .finally(()=>console.log('Finalizó'));


//RegExp  
//The RegExp object is used for matching text with a pattern.
//For example, if we want manage the date with the pattern 'yyyy-mm-dd'
const regexData=/([0-9]{4})-([0-9]{2})-([0-9]{2})/; //Here, we are established the rules of the input date.
const match=regexData.exec('2021-03-13');
const year=match[1];
const month=match[2];
const day=match[3];
console.log(year,month,day);