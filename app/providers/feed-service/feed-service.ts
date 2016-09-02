import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the FeedService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FeedService {
  private limit :number = 10; //limit the items for first load data in Home Page
  constructor(private http: Http) {}


  //Use for First Load Data & Load more data  
  LoadFeedData(start:number){
    let url = "http://textkhmer.com/api/feedapi.php?limit="+this.limit+"&&start="+start;
    return this.http.get(url)
        .map((res : Response) => res.json())
  }


  //Load Newer Data (for Infinite Scroll)
  LoadNewerData(start:number){
    let url = "http://textkhmer.com/api/feedapi.php?before="+start;
    return this.http.get(url)
        .map((res : Response) => res.json())
  }

  //Load data by ID For Detail page
  LoadDetail(id:number){
    let url = "http://textkhmer.com/api/feedapi.php?id="+id;
    return this.http.get(url)
        .map((res : Response) => res.json())
  }

}

