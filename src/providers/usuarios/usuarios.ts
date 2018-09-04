import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UsuariosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuariosProvider {

  private url:string="https://apidocumentospiensadigital.herokuapp.com/"

  constructor(public http: HttpClient) {
    console.log('Hello UsuariosProvider Provider');
  }
  signUpUsuario(user){
    let params=JSON.stringify(user);
    let httpHeaders={
      headers: new HttpHeaders({
      'Content-Type': 'application/json'
      })
    };
    let urlCrearUsuario=this.url+"users";
    return this.http.post<any>(urlCrearUsuario,params,httpHeaders);
  }

  signInUsuario(auth){
    let params=JSON.stringify(auth);
    let httpHeaders={
        headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let urlAutenticarUsuario=this.url+"user_token";
    return this.http.post<any>(urlAutenticarUsuario,params,httpHeaders);
  }

}
