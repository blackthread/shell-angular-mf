import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FrontPageComponent} from "./frontpages/frontpage.component";
import {AboutComponent} from "./frontpages/about.component";
import {AdminPageComponent} from "./admin/admin.component";
import {AdminUserComponent} from "./admin/user.component";
import {APP_BASE_HREF} from "@angular/common";
import {EmptyRouteComponent} from "./empty-route/empty-route.component";

const routes: Routes = [ {
  path: '',
  component: FrontPageComponent,
  children: [
    {
      path: 'about',
      component: AboutComponent
    }
  ]
},
  {
    path: 'admin',
    component: AdminPageComponent,
    children: [
      {
        path: 'users',
        component: AdminUserComponent
      }
    ]
  },
  { path: '**', component: EmptyRouteComponent }];

@NgModule({
  declarations: [FrontPageComponent, AboutComponent, AdminUserComponent, AdminPageComponent],
  imports: [RouterModule.forRoot(routes, {
    useHash: true,

    errorHandler: console.error,})],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/home' },
  ],
})
export class AppRoutingModule { }
