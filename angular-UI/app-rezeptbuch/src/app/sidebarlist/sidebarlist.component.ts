import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

import { Recipe } from 'src/app/recipe';
import { RECIPES } from 'src/app/ie-recipes';

@Component({
  selector: 'app-sidebarlist',
  templateUrl: './sidebarlist.component.html',
  styleUrls: ['./sidebarlist.component.css']
})
export class SidebarlistComponent implements OnInit {
	
	recipes = RECIPES;
	selectedRecipe: Recipe | undefined;
	
  constructor() { }

  ngOnInit(): void {
  }
  
  @Output() selectedRecipeEvent = new EventEmitter<Recipe>();

  showSelectedRecipe(recipe: Recipe){
    this.selectedRecipe = recipe;
	this.selectedRecipeEvent.emit(this.selectedRecipe);
	}

}
