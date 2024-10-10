import { Component } from '@angular/core';
import {NgClass} from '@angular/common';

interface History {
  name: string;
}

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  public openDropdown: boolean = false;
  public openSearch: boolean = false;
  public histories: History[] = [
    {name: 'закрепить теги'},
    {name: 'закрепить теги'},
    {name: 'кнопка'},
    {name: 'приложение'},
    {name: 'форма'},
    {name: 'текстовое поле'},
  ]

  public onSearchOpen() {
    this.openSearch = true;
  }

  public onDropdownOpen() {
    this.openDropdown = true;
  }

  public closeAllDropdowns() {
    this.openSearch = false;
    this.openDropdown = false;
  }
}
