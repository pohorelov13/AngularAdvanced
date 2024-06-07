import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RecipesService} from "../recipes.service";
import {Recipe} from "../lesson1/recipe";
import {map, Subscription} from "rxjs";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute, private service: RecipesService) {
  }

  public recipe?: Recipe;
  private sub1? : Subscription;
  private sub2? : Subscription;

  ngOnInit(): void {
    this.sub1 = this.route.params.subscribe(params => {
      console.log(params['number'])
    this.sub2 = this.service.getRecipesById(params['number'])
          .subscribe({
            next: (v) => {
              console.log(v);
              this.recipe = v
            },
            error: (e) => console.log(e)
          })
    });
  }
  ngOnDestroy(): void {
    if (this.sub1) {
      this.sub1.unsubscribe()
    }
    if (this.sub2) {
      this.sub2.unsubscribe()
    }
  }
}
