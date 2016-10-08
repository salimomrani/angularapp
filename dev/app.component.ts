import {Component} from 'angular2/core';
import {HeaderComponent} from "./header/header.component";
import {RecipesComponent} from "./recipes/recipes.component";

@Component({
    selector: 'my-app',
    templateUrl:"templates/recipebook.tpl.html",
    directives:[HeaderComponent,RecipesComponent]
})
export class AppComponent {
}