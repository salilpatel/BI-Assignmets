// js to captitalize only the first character

function cap(string){
    let firstL = str.charAt(0);
    let a = "";
    if(firstL == firstL.toLowerCase()){
        a = firstL.toUpperCase();
        return string.replace(firstL,a);
    }
    else{
        return string;
    }
}
let str="hello Javascript Javascript"
console.log(cap(str))