import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  server_url="http://localhost:4000"

  constructor(private http:HttpClient) { }

  // get all recipes
  getAllRecipesAPI(){
    return this.http.get
  }
}
