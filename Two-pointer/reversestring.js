
const reversestring =(str)=>{

let result = str.split("");

let left =0 ;
let right = str.length-1;

while (left < right){

    let temp = result[left];
    result[left] = result[right];
    result[right]= temp;

    left ++;
    right--;
}
return result.join("");
}
console.log(reversestring("abcd"))