import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'album',
    loadComponent: () => import('./album/album.page').then( m => m.AlbumPage)
  },
];
