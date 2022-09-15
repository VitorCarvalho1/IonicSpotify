import { Routes } from '@angular/router';
import { LoginModule } from './pages/login/login.module';


export const appRotas: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(x => x.LoginModule)
  }
];
