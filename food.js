///Function #1: Array Slice

const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
function slice(){
    return slicing(foods);
}
function slicing(foods){
    let modifiedfood=[];
    modifiedfood.push(foods.slice(1,4));
    return modifiedfood;
}
document.write(slice(slicing))

////Function #2: Array Splice
const food = ["pizza", "burger", "fingerShips", "donuts", "springRoll"];

function spl(food){
    
food.splice(2,0,"noodles","icecream");
    return food;
}
console.log(spl(food));


//Function #3: Filter
const numberArray = [12,324,213,4,2,3,45,4234];
const res=[];
res.push(numberArray.filter(isprime));
function isprime(num){
    let isprime=true;
   for(let i=2;i<num;i++){
       if(num%i==0){
         isprime=false;
         break;
       }
   }
   if(isprime==true){
       return num;
   }
}
console.log(res);



////Function #6: Map
const myArray = [11, 34, 20, 5, 53, 16];
const newarr=myArray.map(func)
function func(num){
   return  num%2==0;
}
console.log(newarr)

///Function #7: Reduce
const myarr=[2, 3, 5, 10];
const res1=myarr.reduce(getmul);
function getmul(total,num){
    return total*num;
}
console.log(res1);