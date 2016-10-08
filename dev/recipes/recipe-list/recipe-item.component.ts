/**
 * Created by salim on 02/10/16.
 */
import {Component} from "angular2/core";
import {Recipe} from "../../recipe";
import {Input} from "angular2/src/core/metadata";

@Component({
    selector :'fa-recipes-item',
    templateUrl: 'templates/recipe-item.tpl.html',

})
export class RecipesItemComponent{

   @Input() recipe:Recipe;
    recipeId:number;

}