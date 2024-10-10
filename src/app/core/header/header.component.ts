import { Component } from '@angular/core';
import {MenuComponent} from '../menu/menu.component';
import {ProfileComponent} from '../profile/profile.component';
import {SearchComponent} from '../search/search.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MenuComponent,
    ProfileComponent,
    SearchComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
}
