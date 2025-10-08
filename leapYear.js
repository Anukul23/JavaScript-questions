const leapYear =(N)=>{

    if (N % 400 ==0){
        return true;
    }
    if( N % 100 ==0){
        return false;
    }

    if(N%4==0){
        return true;
    }

    return false;

}

console.log(leapYear(2024))