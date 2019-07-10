import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PictureComponent } from './pictureComponet/picture.component';
const routes: Routes = [
  { path: '', component: PictureComponent },
  { path: 'picture-detail', component: PictureComponent },
  { path: 'picture-detail/:avturl/:giturl', component: PictureComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PictureRoutingModule { }
