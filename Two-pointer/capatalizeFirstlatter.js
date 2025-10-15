 const capatalizeFirstlatter =(str) =>{

    let arr = str.split("");

    for (let i=0 ; i<arr.length ; i++){

        if(arr[i] == "." || arr[i]==" "){
            continue ;
        }

        if (i==0 || arr[i-1]==" "){
            arr[i] = arr[i].toUpperCase();
        }
    }

    return arr.join("");

 }

 console.log(capatalizeFirstlatter("my name is anukul gautam. i am react developer."))