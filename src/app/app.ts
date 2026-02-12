import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { About } from "./page/about/about";
import { Contact } from "./page/contact/contact";
import { Nav } from "./page/nav/nav";
import { Footer } from "./page/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, About, Contact, Nav, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-custom');
}
