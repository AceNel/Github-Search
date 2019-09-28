import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './user/search.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {path: 'users', component: SearchComponent},
  {path: 'repository', component: RepositoriesComponent},
  {path: '', redirectTo: '/users', pathMatch: 'full'},

];

@NgModule({
  imports: [
    CommonModule,
      RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
