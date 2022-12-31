import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  templateUrl: './views/home.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curso-angular2-final';
  public titulo: string;
  public description: string;

  constructor() {
    this.titulo = 'APP FAVORITOS TITULO';
    this.description = 'Aplicacion web SPA con Angular para gestionar favoritos online';
  }
}
