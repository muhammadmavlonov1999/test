import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: 'links', loadComponent: () => import('./pages/links/links.component').then(c => c.LinksComponent)},
  {path: 'contacts', loadComponent: () => import('./pages/contacts/contacts.component').then(c => c.ContactsComponent)},
  {path: 'tags', loadComponent: () => import('./pages/tags/tags.component').then(c => c.TagsComponent)},
  {path: 'favorites', loadComponent: () => import('./pages/favorites/favorites.component').then(c => c.FavoritesComponent)},
  {path: 'history', loadComponent: () => import('./pages/history/history.component').then(c => c.HistoryComponent)},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];
