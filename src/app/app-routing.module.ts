import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormacionListComponent } from './components/formacion-list/formacion-list.component';
import { FormacionComponent } from './components/formacion/formacion.component';

const routes: Routes = [
  { path: '', component: FormacionListComponent },
  { path: '**', component: FormacionListComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
