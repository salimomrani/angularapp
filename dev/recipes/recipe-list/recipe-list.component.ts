/**
 * Created by salim on 02/10/16.
 */
import {Component} from "angular2/core";
import {Recipe} from "../../recipe";

@Component({
    selector: 'fa-recipes-list',
    templateUrl: 'templates/recipe-list.tpl.html',
    directives:[RecipesListComponent]

})
export class RecipesListComponent {
    recipe: Recipe[] = [];
    recipe = new Recipe('Dummy', 'dummy test', 'http://previews.123rf.com/images/ia64/ia641103/ia64110300006/9015422-Peque-o-ni-o-chico-y-chupete-de-chupete-de-beb-pl-stico-Foto-de-archivo.jpg');

    constructor() {
    }

}