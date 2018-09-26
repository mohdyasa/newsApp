import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { PagerService } from '../_services';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit {

  constructor(private http: Http, private pagerService: PagerService) { }

  private allItems: any[];

  // pager object
  pager: any = {};
  // paged items
  pagedItems: any[];
  ngOnInit() {
    this.http
      .get(
        'https://newsapi.org/v2/sources?apiKey=33dd81e7f4a6411c9e1aab5d12030b68'
      )
      .map((response: Response) => response.json())
      .subscribe(data => {
        // set items to json response
        this.allItems = data.sources;
        this.setPage(1);
      });
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page, 9);

    // get current page of items
    // this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    this.pagedItems = this.allItems.slice(
      this.pager.startIndex,
      this.pager.endIndex + 1
    );
  }
  bindbyCategory(item) {
    if (item === 'a') {
      return 'display: none';
    } else {
      return 'display: none';
    }
  }

}
