let cal =(data)=>{
    console.log("Ex Array:-",data);
    let max = Math.max(...data);
    let len = data.length;
    console.log( "Maximum number:",max)
    let sum =0;
    data.forEach(element => {
       sum += element
    });
    console.log("Sum of all elements:",sum)
   
     let oddcount =0;
     data.forEach(item=>{
       if(item%2 !==0){
           oddcount +=1;
       }
     })
     console.log("Count of odd numbers:",oddcount)
     
    }
    let arr = [4, 8, 2, 11, 6, 7, 10]
    cal(arr)