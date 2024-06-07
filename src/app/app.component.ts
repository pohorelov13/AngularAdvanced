import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {Lesson1Component} from "./lesson1/lesson1.component";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Lesson1Component, MatButton, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Course';

  getRandom() {
    return Math.floor(Math.random() * 50) + 1;
  }
}
