import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import {FeedService} from "../../providers/feed-service/feed-service";


@Component({
  templateUrl: 'build/pages/detail/detail.html',
  providers : [FeedService]
})
export class DetailPage {
  public feedDetail:any;
  public selectedId:any;
  constructor(private navCtrl: NavController, private navParam: NavParams, private feedService : FeedService, private loadingCtrl: LoadingController) {
    this.selectedId = navParam.get('id');
    this.loadDetail();
  }
  loadDetail(){
    this.feedService.LoadDetail(this.selectedId)
        .subscribe(res => {
          let loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Please wait...',
            duration: 2000
          });
          loading.present();

          this.feedDetail = res;
          console.log(this.feedDetail);
        })
  }




}
