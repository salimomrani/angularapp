/**
 * Created by salim on 25/09/16.
 */
import {Component} from "angular2/core";
import {Input} from "angular2/src/core/metadata";

@Component({
    selector :'fa-property-binding',
    template: `
            {{result}}
        `,
})
export class PropertyBindingComponent{
    @Input() result: number=0;
}