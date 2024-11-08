import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { DetailsComponent } from '../app/details/details.component';
export const routes: Routes = [
    {
      path: '',
      component: UserListComponent,  // Default route showing the user list
    },
    {
      path: 'details/:name',
      component: DetailsComponent,  // User details page
    },
];
  

