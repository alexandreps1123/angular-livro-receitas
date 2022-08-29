import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Receita teste', 'Receita sem nada', 'https://cdn.icon-icons.com/icons2/1646/PNG/512/recipepizzaicon_109877.png')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
