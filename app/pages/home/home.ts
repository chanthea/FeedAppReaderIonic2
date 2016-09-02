import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {FeedService} from "../../providers/feed-service/feed-service";
import {DetailPage} from "../detail/detail";

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers : [FeedService]
})
export class HomePage {
  public feeddatas = [];
  public start:number=0;

  constructor(public navCtrl: NavController, private alert: AlertController, private feedservice : FeedService ) {}

  ionViewLoaded(){
    this.feedservice.LoadFeedData(3)
      .subscribe(res => {
          this.feeddatas = res;
      })
  }

  doInfinite(infiniteScroll) {
    this.start+=10;
    setTimeout(() => {
      this.feedservice.LoadFeedData(this.start)
          .subscribe(
          (res) => {
              for (let x of res){
              this.feeddatas.push(x);
          }
          })
      infiniteScroll.complete();
    }, 2000);
  }

    doRefresh(refresher) {
        let id = this.feeddatas[0].SubID;
        console.log(id);
        setTimeout(() => {
            this.feedservice.LoadNewerData(id)
                .subscribe(
                    (res) => {
                        for (let x of res){
                            this.feeddatas.unshift(x);
                        }
                    })
            refresher.complete();
        }, 2000);
    }

    passID(event, item){
        this.navCtrl.push(DetailPage, {
            id: item
        })
    }

}

