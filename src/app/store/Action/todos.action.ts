
export const LOAD = 'load'

export class loadTodoAction
{
    type : string = LOAD
}

export class SuccessAction 
{
    type: string = 'success'
    payload : any 

    
    constructor(payload : any) {
        this.payload = payload
        
    }
}

export class FailedAction 
{
    type: string = 'failed'
    payload : any 

    
    constructor(payload : any) {
        this.payload = payload
        
    }
}



