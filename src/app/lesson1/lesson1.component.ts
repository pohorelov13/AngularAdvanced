import {Component, OnDestroy} from '@angular/core';
import {RecipesService} from "../recipes.service";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource
} from "@angular/material/table";
import {Recipe} from "./recipe";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {map, Subscription} from "rxjs";

@Component({
  selector: 'app-lesson1',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatHeaderRow,
    MatRow,
    MatFormField,
    MatInput,
    MatLabel,
    MatButton,
    FormsModule
  ],
  templateUrl: './lesson1.component.html',
  styleUrl: './lesson1.component.css'
})
export class Lesson1Component implements OnDestroy {
  displayedColumns: string[] = ['Name', 'tags', 'ingredients', 'instructions', 'Difficulty', 'photo'];
  dataSource = new MatTableDataSource<Recipe>();
  value: string = '';
  private sub1: Subscription | undefined

  constructor(private service: RecipesService) {
  }

  ngOnDestroy(): void {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
  }


  public getRecipeByTag() {
    this.sub1 = this.service.getRecipes(this.value)
      .pipe(map(rs => rs.recipes))
      .subscribe({
        next: (v) => {
          console.log(v);
          this.dataSource.data = v
        },
        error: (e) => console.log(e)
      })
  }
}
