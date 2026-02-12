import { Routes } from '@angular/router';
import { About } from './page/about/about';
import { Contact } from './page/contact/contact';
import { Home } from './page/home/home';
import { Login } from './page/login/login';

export const routes: Routes = [
    {
        path:"about",
        component:About
    },
    {
        path:"contact",
        component:Contact
    },
    {
        path:"home",
        component:Home
    },
    {
        path:"login",
        component:Login
    }
];
