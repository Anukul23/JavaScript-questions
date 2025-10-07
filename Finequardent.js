 
 const findQuardent = (x,y)=>{
    
    if (x>1 && y> 1){
        return 1;
    }
    else if (x<1 && y>1){
        return 2;
    }
    else if (x<1 && y < 1){
        return 3;
    }
    else{
        return 4;
    }
 }

 console.log(findQuardent(-10,20))

