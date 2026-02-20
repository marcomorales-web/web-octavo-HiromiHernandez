import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { registrarComponent} from './login/registrar.component';
import { menuComponent } from './menu/menu.component';

export const routes: Routes = [{ path: '', component: LoginComponent }, 
    { path: 'register', component: registrarComponent },
    { path: 'menu', component: menuComponent}
];