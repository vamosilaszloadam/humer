import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
// import { LoginComponent } from "./login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'humer';
  isLoggedIn = false;
}
