function capatalizeFirstlatter(paragraph){

    let arr = paragraph.split("");

    for(let i=0 ; i<arr.length;i++){

        if (arr[i]=="." || arr[i]==" "){
            continue;
        }
        if(i==0 || arr[i-1]==" "){
            arr[i] = arr[i].toUpperCase();
        }
    }

    return arr.join("");
}
console.log(capatalizeFirstlatter('the quick Brown fox jumps over The lazy dog.'))