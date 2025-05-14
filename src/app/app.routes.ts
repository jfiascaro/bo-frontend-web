import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
//import { presentationRoutes } from './presentation/presentation.routes';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //{ path: '404', loadComponent: () => import('./errors/not-found/not-found.component').then(m => m.NotFoundComponent) },
  //{ path: '500', loadComponent: () => import('./errors/server-error/server-error.component').then(m => m.ServerErrorComponent) },
];

export const routes: Routes = [
  {
    canActivate: [AuthGuard],
    path: '',
    loadComponent: () => import('./app.component').then((m) => m.AppComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./core/pages/home/home.component').then(
            (m) => m.HomeComponent
          ),
      },
    ],
  },

  {
    path: '**',
    loadComponent: () =>
      import('./core/pages/404/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
];
