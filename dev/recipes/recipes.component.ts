/**
 * Created by salim on 25/09/16.
 */
import {Component} from "angular2/core";
import {RecipesListComponent} from "./recipe-list/recipe-list.component";

@Component({
    selector :'fa-recipes',
    templateUrl: 'templates/recipes.tpl.html',
    directives:[RecipesListComponent]
})
export class RecipesComponent{
}