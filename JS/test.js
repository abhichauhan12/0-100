console.log("hello world");

let ans=0;

for(let i=0;i<10;i++){
    ans=ans+i;
    console.log(ans);
}

//array

const testArray = ["abcd","asd","asdasdasd"];

console.log(testArray[2]);

//module 

let a =34 ;

if( a%2 == 0 ){
    console.log("Even number");
}

//objects 

const user1={
    uName : "abhi",
    age : 24
}


const allUser = [{
    uName : "abhi",
    age : 24
} ,{
    uName : "ravi",
    age : 24
},{
    uName : "ram",
    age : 24
}]

//functions

function sum(a,b){
    const sumOfNum = a+b
    return sumOfNum;
}

const val = sum(2,3);
console.log(val);
