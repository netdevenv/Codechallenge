import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PictureComponent } from './pictureComponet/picture.component';
import { PictureRoutingModule } from './picture-routing.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PictureRoutingModule
    ],
    declarations: [PictureComponent],
    providers: []
})
export class PictureModule {
}
