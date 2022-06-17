import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipe';
import { RECIPES } from 'src/app/ie-recipes';



@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
	
  selectedRecipe!: Recipe;
  recipe!: Recipe;
		
  constructor() { }

  ngOnInit(): void {
  }
  
    showSelectedRecipe(recipe: Recipe){
	this.selectedRecipe = recipe;
	}
}
