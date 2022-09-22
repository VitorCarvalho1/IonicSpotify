import { Routes } from '@angular/router';
import { AutenticadoGuard } from './guards/autenticado.guard';
import { LoginModule } from './pages/login/login.module';


export const appRotas: Routes = [
  {
    path: 'player',
    loadChildren: () => import('./pages/player.module').then(x => x.PlayerModule),
    canLoad: [AutenticadoGuard],
  },
 
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(x => x.LoginModule),
  }
];
