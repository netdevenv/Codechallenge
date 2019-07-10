import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './homeComponet/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { DatePipe } from '@angular/common';
import {HomeServices} from './home.services';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { PaginationModule } from 'ngx-bootstrap/pagination';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HomeRoutingModule, Ng2OrderModule,
        HttpModule, Ng2SearchPipeModule,
        HttpClientModule, PaginationModule.forRoot()
    ],
    declarations: [HomeComponent],
    providers: [DatePipe, HomeServices]
})
export class HomeModule {
}
