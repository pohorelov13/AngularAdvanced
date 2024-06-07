import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Lesson1Component} from "./lesson1/lesson1.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Lesson1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Course';
}
