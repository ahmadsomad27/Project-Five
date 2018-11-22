import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, Testability } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { SoppingListService } from '../sopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
// viewChild dekorator digunakan untuk mendapatkan akses ke komponen anak
// yang ditemukan di template, sehingga anda dapat mengakses properti dan metodnya
@ViewChild('nameInput') nameRef:ElementRef;
@ViewChild('amountInput') amountRef:ElementRef;
// @Output() ingredientAdded= new EventEmitter<Ingredient>();
  constructor(private slsService:SoppingListService) { }

  ngOnInit() {
  }

  onAddItem(){
    const ingName = this.nameRef.nativeElement.value;
    const ingAmount = this.amountRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.slsService.addIngredient(newIngredient);
    // this.ingredientAdded.emit(newIngredient);
    // console.log(this.ingredientAdded);
    // Testability
  }
}
