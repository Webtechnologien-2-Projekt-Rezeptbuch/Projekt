import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SignupformComponent } from './signupform/signupform.component';
import { LoginformComponent } from './loginform/loginform.component';
import { AddrecipeformComponent } from './addrecipeform/addrecipeform.component';
import { RecipeComponent } from './recipe/recipe.component';
import { TodolistComponent } from './todolist/todolist.component';
import { SidebarlistComponent } from './sidebarlist/sidebarlist.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SignupformComponent,
    LoginformComponent,
    AddrecipeformComponent,
    RecipeComponent,
    TodolistComponent,
    SidebarlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
