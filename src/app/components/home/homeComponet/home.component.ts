import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeServices } from '../home.services';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public data: any;
  // sorting
  private key: any = 'login';
  private reverse = false;
  private totalRecords = 0;
  private sortTableData = [];
  private displayData = [];
  private itemsPerPage: 5;
  private isResetCurrentPage = false; // reset current page to one
  private filter: any;
  private pageNo: number;
  private page: number;
  // end sorting
  constructor(private formBuilder: FormBuilder, public appservice: HomeServices, public router: Router) {
    this.itemsPerPage = 5;
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    // tslint:disable-next-line:no-debugger
    this.appservice.getJSON().subscribe(data => {
      this.data = data.items;
      this.sortTable(this.getPendingrequesteDataSet(this.data));
    });
  }
  getPendingrequesteDataSet(requestData) {
    const valArray = [];
    requestData.forEach(element => {
      const vals = {
        login: element.login,
        id: element.id,
        avatar_url: element.avatar_url,
        html_url: element.html_url,
      };
      valArray.push(vals);
    });
    return valArray;
  }
  // sorting
  sortTable(data: any[]) {
    this.totalRecords = data.length;
    if (this.isResetCurrentPage) {
      this.pageNo = 1;
      this.isResetCurrentPage = false;
    }

    this.sortTableData = data;
    this.pageNo = 1;
    this.itemsPerPageChanges();
  }

  // reload data when items per page changed
  public itemsPerPageChanges() {
    this.pageNo = 1;
    this.isResetCurrentPage = true;
    this.displayData = this.sortTableData.slice(0, this.pageNo * this.itemsPerPage);

  }

  public pageChanged(event: any): void {
    this.page = (event.page - 1) * this.itemsPerPage;
    this.pageNo = event.page;
    this.displayData = this.sortTableData.slice(this.page, this.pageNo * this.itemsPerPage);
  }

  sorting(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  // end sorting
  public onCellClick(item: any): any {
    this.router.navigate(['/picture/picture-detail/', { avturl: item.avatar_url, giturl: item.html_url, }]);
  }

}
