import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuariosProvider } from './../../providers/usuarios/usuarios';

/**
 * Generated class for the IniciarSesionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-iniciar-sesion',
  templateUrl: 'iniciar-sesion.html',
})
export class IniciarSesionPage {

  formulario:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _usuarios:UsuariosProvider) {
    this.formulario={
      auth:{
        email:"",
        password:""
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IniciarSesionPage');
  }

  iniciarSesion(){
    this._usuarios.signInUsuario(this.formulario).
    subscribe(authentication=>{
      localStorage.setItem("SessionToken", authentication.jwt)
      console.log(authentication);
    });
  }

}
