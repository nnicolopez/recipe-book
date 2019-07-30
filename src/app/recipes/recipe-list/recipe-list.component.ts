import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Test',
      'This is a recipe',
      'https://www.hogarmania.com/archivos/201502/1580-coca-de-puerro-y-mejillones-764-xl-668x400x80xX.jpg'
    ),
    new Recipe(
      'Test',
      'This is a recipe',
      'https://www.hogarmania.com/archivos/201502/1580-coca-de-puerro-y-mejillones-764-xl-668x400x80xX.jpg'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

  onSelectRecipe(recipe: Recipe){
    this.selectedRecipe.emit(recipe);
  }

}
