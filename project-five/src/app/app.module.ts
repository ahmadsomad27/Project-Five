import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { SoppingListComponent } from './sopping-list/sopping-list.component';

//tambahkan code berikut
import {RecipeListComponent} from "./recipe/recipe-list/recipe-list.component";
import {RecipeDetailComponent} from "./recipe/recipe-detail/recipe-detail.component";

//tambahkan code berikut (2)
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';

//tambahkan code berikut (3)
import { ShoppingEditComponent } from "./sopping-list/shopping-edit/shopping-edit.component";
import { DropdownDirective } from './shared/dropdown.directive';
import {SoppingListService } from './sopping-list/sopping-list.service';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    SoppingListComponent,

    //tambahkan code berikut
    RecipeListComponent,
    RecipeDetailComponent,

    //tambahkan code berikut (2)
    RecipeItemComponent,

    //tambahkan code berikut (3)
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
    
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [SoppingListService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
