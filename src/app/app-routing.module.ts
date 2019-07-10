import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: './components/home/home.module#HomeModule' },
  { path: 'picture', loadChildren: './components/picture/picture.module#PictureModule' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
  ],
  providers: [],
})
export class AppRoutingModule { }
