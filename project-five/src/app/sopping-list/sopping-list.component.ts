import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { SoppingListService } from './sopping-list.service';

@Component({
  selector: 'app-sopping-list',
  templateUrl: './sopping-list.component.html',
  styleUrls: ['./sopping-list.component.css']
})
export class SoppingListComponent implements OnInit {

  ingredients:Ingredient[]
  // =[
  //   new Ingredient('Apples',23),
  //   new Ingredient('Tomato',10),
  // ];
  
  constructor(private slsService:SoppingListService) { }

  ngOnInit() {
    this.ingredients=this.slsService.getIngredient();
    this.slsService.IngredientChange
    .subscribe(
      (Ingredient:Ingredient[])=>{
        this.ingredients=Ingredient;
      }
    )
  }

  // onIngredientAdded(ingredient:Ingredient){
  //   this.ingredients.push(ingredient);
  // }
}
