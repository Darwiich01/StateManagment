import {  ActionReducerMap } from "@ngrx/store";
import { Counter, CounterReducer } from './Reducer/counter.reducer';
import { TodoReducer, Todo } from './Reducer/todos.reducer';

export interface StoreInterface
{
    counter : Counter, 
    todos : Todo[]
}



export interface customAction
{
   type: string,
   payload : any 
}

export const reducers : ActionReducerMap<StoreInterface> = 
{
    counter : CounterReducer,
    todos    : TodoReducer
}

