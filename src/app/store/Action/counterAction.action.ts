
export class IncrementAction
{
    type : string ='increment'
    payload : number 
     
    
    constructor(payload : number ) {
        this.payload = payload
        
    }

}



export class decrementAction
{
    type : string ='decrment'
    payload : number 
     
    
    constructor(payload : number ) {
        this.payload = payload
        
    }

}