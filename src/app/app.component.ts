import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  usuarios = ['EmilianoSanchez', 'ruffles', 'usuario123'];

  avatar= '../assets/imagenes/avatar.jpg'
}
