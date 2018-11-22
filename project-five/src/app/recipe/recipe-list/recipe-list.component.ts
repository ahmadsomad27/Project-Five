import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes:Recipe[];

  constructor(private recipeService:RecipeService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  //dikarenakan kita butuh method navigate maka kita import Router pada @angular/router
  //setelah kita import maka kita panggil pertama kali dengan construktor

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }
  }
