/**
 * Created by salim on 25/09/16.
 */
import {Component} from "angular2/core";
import {EventEmitter} from "angular2/src/facade/async";
import {Output} from "angular2/src/core/metadata";

@Component({
    selector :'fa-event-binding',
    template: `
    <button (click)="onClicked()">Click me please !</button>        
`,
})
export class EventBindingComponent{
    @Output() clicked = new EventEmitter();
    onClicked(){
        this.clicked.emit('it works!');
    }
}