import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

const routes: Routes = [{
  path: '',
  component: UsersListComponent
}, {
  path: 'userdetails',
  component: UserDetailComponent
}, {
  path: '**',
  redirectTo: 'landing'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
