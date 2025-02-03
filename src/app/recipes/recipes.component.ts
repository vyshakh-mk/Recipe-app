import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-recipes',
  imports: [HeaderComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {
 
  allRecipes:any=[]

  constructor(private api:ApiService){}

  ngOnInit(){
    this.getAllRecipes()
    
  }
}
