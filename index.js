// Your code here
class Polygon{
    constructor (numbers=[]){
        this.numbers=numbers
    }
    get countSides(){
        return this.numbers.length;
    }
    get perimeter(){
        let perim=0
      for(let i=0;i<this.numbers.length;i++){
        perim+=this.numbers[i]

      }
      return perim
    }
}

class Triangle extends Polygon{
  get isValid(){
    if (this.numbers[0] + this.numbers[1]<= this.numbers[2] || this.numbers[0] + this.numbers[2] <= this.numbers[1] || this.numbers[1] + this.numbers[2] <= this.numbers[0])
    {
        return false;
    }
    else{
        return true;
    }
  }

    
}
let shape =new Triangle([2,34,5,78,9,9])
console.log(shape.isValid)

class Square extends Polygon{
    get isValid(){
        let first = this.numbers[0];
       for (let i=1; i<this.numbers.length; i++)
           if (this.numbers[i] !== first){
               return false;
           }
           else{
            return true
           }
    
    }
    get area(){
        return this.numbers[0]*this.numbers[1]
    }
}