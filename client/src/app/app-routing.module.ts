import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {LoginComponent} from "./components/login/login.component";

// Our Array of Angular 2 Routes
const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  }//,
  //{path: '**', component: NotFoundComponent} // The "Catch-All" Route
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes, {useHash:true})],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
