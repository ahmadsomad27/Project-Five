import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { SoppingListService } from '../sopping-list/sopping-list.service';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  //property:class recipe
  private recipes:Recipe[]=[
    new Recipe('Nasi Goreng','Nasgor or Nasi Goreng is the name of a typical East Java food. This food is very good.'
    ,'../src/app/img/nasgor.jpg',
    [
      new Ingredient('meal',1),
      new Ingredient('tomato',2)
    ]),
    new Recipe('Mie Ayam','Mie Ayam or Hamburger is a kind of Sandwich food. Consisting of round bread slightly flat and halved. In the middle there is a slice of seasoned minced meat, served with slada leaves, sliced ??tomatoes, cucumber and various sauces.'
  ,'../src/app/img/mie.jpg',
  [
      new Ingredient('rice',1),
      new Ingredient ('meal', 3),
      new Ingredient('egg',1)
  ]),];
  getRecipes(){
    return this.recipes.slice();
  }
  
  //tambahkan method addIngredientsShoppingList dengan parameter ingredient[]
  addIngredientsSoppingList(ingredients:Ingredient[]){
    this.slsService.addIngredients(ingredients);
  }

  getRecipe(index:number){
    return this.recipes[index];
  }
constructor(private slsService: SoppingListService) { }

}
