import { Routes } from '@angular/router';
import {SecondComponent} from "./second/second.component";
import {ThirdComponent} from "./third/third.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {Lesson1Component} from "./lesson1/lesson1.component";
import {exitGuard} from "./exit.guard";

export const routes: Routes = [
  {path:'', component: Lesson1Component, canDeactivate: [exitGuard]},
  {path:'second/:number', component: SecondComponent},
  {path:'third', component: ThirdComponent},
  {path: '**', component: NotFoundComponent}];
