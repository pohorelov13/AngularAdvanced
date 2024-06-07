import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Recipe, Recipes} from "./lesson1/recipe";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private client: HttpClient) { }

  public getRecipesByTag(tag: string): Observable<Recipes> {
    return this.client.get<Recipes>(`https://dummyjson.com/recipes/tag/${tag}`);
  }

  public getRecipesById(id: number): Observable<Recipe> {
    return this.client.get<Recipe>(`https://dummyjson.com/recipes/${id}`);
  }
}
