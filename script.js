
let n = prompt("enter a number")
                                                                                                                                                                            
const sumOfEvens = (n)=> {
     
    let sum = 0; 
    for(i=2;i<=n;i++){
        if(i%2==0){
             sum=sum+i
        }
    }return sum
   
  }
  const evenSum=sumOfEvens(n)
document.write(`sum of even numbers upto ${n} is ${evenSum}`)
