import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as _ from 'underscore';

import { PagerService } from '../_services/index';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {

  constructor(private http: Http, private pagerService: PagerService) { }

  private allItems: any[];

  // pager object
  pager: any = {};
  // paged items
  pagedItems: any[];
  ngOnInit() {
    this.http
      .get(
        'https://newsapi.org/v2/everything?q=bitcoin&apiKey=33dd81e7f4a6411c9e1aab5d12030b68'
      )
      .map((response: Response) => response.json())
      .subscribe(data => {
        // set items to json response
        this.allItems = data.articles;
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
