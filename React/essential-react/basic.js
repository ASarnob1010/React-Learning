//mutablity 
// Mutability means that an object or a variable can be changed after it's created. 
// In JavaScript, objects and arrays are mutable. 
// This means you can change their properties or elements after they've been created.

//Immutability means that once a value is created, 
//it cannot be changed. In JavaScript, primitive values (numbers, strings, booleans, null, 
//undefined, and symbols) are immutable. However, 
//immutability can also be enforced in objects and arrays using various techniques, 
//such as using Object.freeze() 

let a = [1,2,3,4,5,6];
let b = a;//swallow copy   <-------- important --------->
b.pop();
//this pop will remove the element from both array. 
//actually it gets the reference access;
console.log(a);
console.log(b);

//deep copy
let x = [1,2,3,4]
let y = [...x];// deep copy <-------- important --------->
y.pop();
console.log(x);// 1 2 3 4
console.log(y);// 1 2 3

//in react  i can not change value if i make swallow copy for that i have to do deep copy.



//<-------------------------------------Destructor---------------------------------------->

var my = {name : "arnob" , age : 24}
//obj.age; rather use :
const {age} = my

//amake barbar obj.age kora lagbe na

var obj = {
           name : "string",
           facbook : {
                   social : {
                          first : "arunab",
                          email : "abc@gmail.com",
                   }
           }
}
console.log(obj.facbook.social.email);
//rather destructure it 
const {mailAddress} = obj.facbook.social.email;//ekbar korar por just email likhe direct access kora jabe 

var arr = [12,"lele","arnob"]
const [ag,,str] = arr;
console.log(ag)
console.log(str);
