import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { CsPage } from '../cs/cs';
import { DibujoPage } from '../dibujo/dibujo';
import { ComPage } from '../com/com';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  historia = HistoriaPage;
  CS = CsPage;
  dibujo = DibujoPage;
  com = ComPage;

  constructor(public navCtrl: NavController) {

  }

  clickHistoria(){
    this.navCtrl.push(this.historia);
  }

  clickCS(){
    this.navCtrl.push(this.CS); 
  }

  clickdibujo(){
    this.navCtrl.push(this.dibujo);
  }

  clickcom(){
    this.navCtrl.push(this.com);
  }
}
