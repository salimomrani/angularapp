/**
 * Created by salim on 25/09/16.
 */
import {Component} from "angular2/core";
import {Input} from "angular2/src/core/metadata";
import {PropertyBindingComponent} from "./property-binding.component";
import {EventBindingComponent} from "./event-binding.component";
import {TwoWayBindingComponent} from "./two-way-binding.component";

@Component({
    selector: 'fa-other',
    templateUrl: `templates/test.tpl.html`,
    styles: [`
       .redBorder {
    border: 1px solid red;
        }
        `],

    directives: [PropertyBindingComponent, EventBindingComponent,TwoWayBindingComponent]

})
export class OtherComponent {
    stringInterpolation = 'this a string interpolation';
    numberInterpolation = 2;
    @Input() result: number = 0;
    heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

    onTest() {
        return true;
    }

    onClicked(value: string) {
        alert('test');
    }

}