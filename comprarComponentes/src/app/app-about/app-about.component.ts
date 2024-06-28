import { Component } from '@angular/core';
import { About } from './component';

@Component({
  selector: 'app-app-about',
  templateUrl: './app-about.component.html',
  styleUrl: './app-about.component.scss'
})
export class AppAboutComponent {

  about: About = {
    name: 'Ignacio Alonso',
    direction: 'Tandil',
    mail: 'ignacioalonso05@gmail.com',
  }
}
