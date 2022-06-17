import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopBarComponent } from './top-bar/top-bar.component';
import { SignupformComponent } from './signupform/signupform.component';
import { LoginformComponent } from './loginform/loginform.component';
import { AddrecipeformComponent } from './addrecipeform/addrecipeform.component';
import { RecipeComponent } from './recipe/recipe.component';
import { TodolistComponent } from './todolist/todolist.component';
import { SidebarlistComponent } from './sidebarlist/sidebarlist.component';

const appRoutes: Routes = [
  { path: 'addrecipe', component: AddrecipeformComponent },
  { path: 'recipe', component: RecipeComponent },
  { path: 'todolist', component: TodolistComponent },
  { path: 'sidebar', component: SidebarlistComponent },
  { path: 'signup', component: SignupformComponent },
  { path: 'login', component: LoginformComponent },    

  { path: '',   redirectTo: '/recipe', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}