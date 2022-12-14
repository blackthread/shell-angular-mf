import { Component } from '@angular/core';

@Component({
  selector: 'app-home-root',
  template: `<h1>{{title}}</h1>
  <nav>
    <a routerLink="/">Front Page</a>
    <a routerLink="/admin">Admin Page</a>
  </nav>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'app-home';
}
