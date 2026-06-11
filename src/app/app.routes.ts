import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import path from 'path';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login,

    }



];
