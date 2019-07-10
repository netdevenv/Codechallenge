import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {
  public avatar_url: any;
  public giturl: any;
  constructor(public router: Router, private route: ActivatedRoute) {
    route.params.subscribe(val => {
      if (this.route.snapshot.params['avturl']) {
        this.avatar_url = this.route.snapshot.params['avturl'];
      }
      if (this.route.snapshot.params['giturl']) {
        this.giturl = this.route.snapshot.params['giturl'];
      }
    });
  }

  ngOnInit() {
  }

}
