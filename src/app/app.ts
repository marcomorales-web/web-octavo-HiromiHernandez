import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { registrarComponent } from './login/registrar.component';
import { menuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent,registrarComponent, menuComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
