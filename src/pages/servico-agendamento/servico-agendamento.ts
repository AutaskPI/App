import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ServicoAgendamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-servico-agendamento',
  templateUrl: 'servico-agendamento.html',
})
export class ServicoAgendamentoPage {

  testCheckboxResult: any;
  testCheckboxOpen: boolean;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtlr: AlertController ) {
  }

  pesquisaHoraDisponivel(){
    let alert = this.alertCtlr.create();
    alert.setTitle('Escolha uma horário: ');

    alert.addInput({
      type: 'checkbox',
      label: '12:00',
      value: '12:00'
    });
    alert.addInput({
      type: 'checkbox',
      label: '12:30',
      value: '12:30'
    });
    
    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Confirmar',
      handler: data => {
        console.log('Checkbox data:', data);
        this.testCheckboxOpen = false;
        this.testCheckboxResult = data;
      }
    });
    alert.present();
  }

  alertConfirmar(){
    let alert = this.alertCtlr.create();
    alert.setTitle('Mensagem do sistema!');
    alert.setMessage('Seu agendamento foi realizado com sucesso!');
    alert.addButton({
      text: 'OK',
      handler: data => {
        console.log('Checkbox data:', data);
        this.mudar();
      }
    });
    alert.present();
    }

    mudar(){
      let mudar = this.navCtrl.setRoot(HomePage);
    }
}
