import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { CsPage } from '../cs/cs';
import { DibujoPage } from '../dibujo/dibujo';
import { ComPage } from '../com/com';
import { PappsPage } from '../papps/papps';
import { RoboticaPage } from '../robotica/robotica';
import { MiPage } from '../mi/mi';
import { PyEPage } from '../py-e/py-e';
import { CalculoPage } from '../calculo/calculo';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  historia = HistoriaPage;
  CS = CsPage;
  dibujo = DibujoPage;
  com = ComPage;
  PAPPS = PappsPage;
  Robotica = RoboticaPage;
  MI = MiPage;
  PyE = PyEPage;
  Calculo = CalculoPage;

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

  clickPAPPS(){
    this.navCtrl.push(this.PAPPS);
  }

  clickRobotica(){
    this.navCtrl.push(this.Robotica);
  }

  clickMI(){
    this.navCtrl.push(this.MI);
  }

  clickPyE(){
    this.navCtrl.push(this.PyE);
  }

  clickCalculo(){
    this.navCtrl.push(this.Calculo);
  }


}
