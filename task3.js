/*

1. convery an array to string without tostring

2. function to accept an item and push that item to an array

3.function to accept an item and pop that item to an array

4. function to accept an item,index and add that item to an array at a given index
5.
Write a function filterRange(arr, a, b) that gets an array arr, 
looks for elements with
values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.

For instance:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)

*/

/*
//1
let users=["john","peter","henry","mary","justin","emelia","henry"]
let str = ""
for(let i=0;i<users.length;i++){
    str += `${users[i]} `
}
console.log(str)
*/

//2
/*let users=["john","peter","henry","mary","justin","emelia","henry"]

let newUser = prompt("Enter a name")

users.push(newUser)

console.log(users)
*/



//4
/*
let arr = [10,20,50,4,0,1,99,83]
function addEle(index,element){
    for(let i=0; i<arr.length; i++){
        if(i == index){
            arr.splice(i,0,element)
        }
    }
}

addEle(3,55)
addEle(1,42)
let len=arr.length - 1
addEle(len,81)
console.log(arr)
*/


//5
let arr = [10,20,50,4,0,1,99,83]
let newArr = []
function func(arr, a, b){
    for(let i=0; i<arr.length; i++){
        if((arr[i] >= a)&&(arr[i] <= b)){
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(func(arr, 5 , 50))
