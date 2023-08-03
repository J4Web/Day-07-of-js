

const people = [
    { name: 'Wes', year: 1988 }, 
    { name: 'Kait', year: 1986 }, 
    { name: 'Irv', year: 1970 }, 
    { name: 'Lux', year: 2015 }, 
];
const comments = [
    { text: 'Love this!', id: 523423 },
{ text: 'Super good', id: 823423 },
{ text: 'You are the best', id: 2039842 },
{ text: 'Ramen in my fav food ever', id: 123523 },
{ text: 'Nice Nice Nice!', id: 542328 }
];


//some and every checks

//using tradional way of function

// const isAdult=people.some(function per(person){
//     const getFullYear=new Date().getFullYear();
//     if(getFullYear-person.year >=19){
//         return true;
//     }
//     return false;
// })

// console.log({isAdult});

//hotshot way


// const isAdult=people.some(per=> new Date().getFullYear()-per.year>=19);
// console.log({isAdult});

//array.prototype.some() //is at least one person 19

//array.prototype.every() //is everyone 19



const allAdults =people.every(per=> ((new Date()).getFullYear()-per.year>=19))
console.log({allAdults});

//find is like filter but instead returns just the one you are looking for

//find the comment with the ID of 823423


const findAdults=comments.find(item=> item.id==823423);
//returns the first thing it finds it
console.log(findAdults);


//find index

//array.prototype.findIndex()

//FIND THE COMMENT WITH THIS ID 
//DELETE THE COMMENT WITH THE ID OF 823423


const GetItsIdx=comments.findIndex(item=> item.id==823423);
console.log(GetItsIdx);

//two ways to delete it 
//splice 
//redux way creating new array

comments.splice(GetItsIdx,1);
console.log(comments);


const newComments=[
    ...comments.slice(0,GetItsIdx),
    ...comments.slice(GetItsIdx+1)
]
console.table(newComments);