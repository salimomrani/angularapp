/**
 * Created by salim on 25/09/16.
 */
import {Component} from "angular2/core";
import {EventEmitter} from "angular2/src/facade/async";
import {Output} from "angular2/src/core/metadata";

@Component({
    selector :'fa-two-binding',
    template: ` 
 <input type="text" [(ngModel)]="person.name">
  <input type="text" [(ngModel)]="person.name">

`,
})
export class TwoWayBindingComponent{

    person = {
        name:'Salim',
        age : 25
    }
}