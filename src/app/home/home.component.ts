import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

import * as _ from 'underscore';

import { PagerService } from '../_services/index';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private http: Http, private pagerService: PagerService) {}

  private allItems: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];
  ngOnInit() {
    this.http
      .get(environment.homeApi)
      .map((response: Response) => response.json())
      .subscribe(data => {
        // set items to json response
        this.allItems = data.articles;
        // initialize to page 1
        this.setPage(1);
      });
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    // this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    this.pagedItems = this.allItems.slice(
      this.pager.startIndex,
      this.pager.endIndex + 1
    );
  }
  bindImage(item) {
    if (item == null) {
      console.log(item);
      return 'https://kimaevents.com/wp-content/uploads/2017/12/picture-not-available.jpg';
    } else {
      return item;
    }
  }
}
