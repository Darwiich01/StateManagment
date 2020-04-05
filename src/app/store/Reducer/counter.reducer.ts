import {customAction} from '../store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface Counter
{
    n: number

}


let initialstate : Counter  = {
    n:0 

}


export function CounterReducer(state = initialstate , action : customAction )
{
    if( action.type === 'increment' )
    {
        return {
            n: state.n + action.payload
        }
    }
    else if ( action.type === 'decrment')
    {
        return  {
            n: state.n - action.payload
        }
    }else
    {
        return state

    }
}

 let counterFS =  createFeatureSelector<Counter>('counter')
export let selectors = createSelector(counterFS, s=> s.n)