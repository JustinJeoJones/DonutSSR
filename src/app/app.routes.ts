import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DonutListComponent } from './components/donut-list/donut-list.component';
import { DonutDetailsComponent } from './components/donut-details/donut-details.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"donuts", component: DonutListComponent},
    {path:"donuts/:id", component: DonutDetailsComponent}
];
