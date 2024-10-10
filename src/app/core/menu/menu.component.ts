import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

interface Menu {
  name: string;
  icon: string;
  href: string;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  public openMenu: boolean = false;
  public menu: Menu[] = [
    {name: 'Ссылки', icon: 'icon-link', href: '/links'},
    {name: 'Контакты', icon: 'icon-contacts', href: '/contacts'},
    {name: 'Теги', icon: 'icon-tag', href: '/tags'},
    {name: 'Избранное', icon: 'icon-favorites', href: '/favorites'},
    {name: 'Посещения', icon: 'icon-history', href: '/history'},
  ]

  public onMenuOpen() {
    this.openMenu = true;
  }

  public onMenuClose() {
    this.openMenu = false;
  }
}
