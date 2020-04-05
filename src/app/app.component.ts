import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreInterface} from './store/store';
import { IncrementAction, decrementAction } from '../app/store/Action/CounterAction.action'
import { selectors } from './store/Reducer/counter.reducer';
import { loadTodoAction } from './store/Action/Todos.action';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'StateManagment';
  count : number = 0 ;

  constructor( private  store : Store<StoreInterface>)
  {
      this.store.select(selectors).subscribe(data => this.count = data )
     
      this.store.subscribe(data => console.log(data.todos))
  }

   increase()
   {
        this.store.dispatch(new IncrementAction(2))
   }

   decrease()
   {
       this.store.dispatch(new decrementAction(2))
   }

   load()
   {
     this.store.dispatch(new loadTodoAction())
   }
 
}
