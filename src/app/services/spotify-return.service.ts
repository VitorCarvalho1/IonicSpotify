import { Injectable } from '@angular/core';
import { spotifyconfiguration } from 'src/environments/environment';
import Spotify from 'spotify-web-api-js';
import { IUsuario } from '../interfaces/IUsuario';
import { SpotifyUserParaUsuario } from '../Common/spotifyHelper';



@Injectable({
  providedIn: 'root'
})
export class SpotifyReturnService {


  spotifyApi: Spotify.SpotifyWebApiJs = null;
  usuario: IUsuario;

  constructor() { 
    this.spotifyApi = new Spotify();
  }

  async initServiceUsuario(){
    if(!!this.usuario)
    return true;


    const token = localStorage.getItem('token');

    if(!token){
      return false;
    }

    try {

      this.definirToken(token);
      await this.obterDadosUsuario();
      return !!this.usuario;


    } catch (ex) {
      return false;
    }


  }

   async obterDadosUsuario(){
    const userInfo = await this.spotifyApi.getMe(); 
    this.usuario = SpotifyUserParaUsuario(userInfo)
  }
  

  obterUrl() {
    const authEndpoint = `${spotifyconfiguration.authEndpoint}?`;
    const clientId = `client_id=${spotifyconfiguration.clientId}&`;
    const redirectUrl = `redirect_uri=${spotifyconfiguration.redirectUrl}&`;
    const scopes = `scope=${spotifyconfiguration.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;
    return authEndpoint + clientId + redirectUrl + scopes + responseType; 
  }

  tokenUrl(){
    if (!window.location.hash)
      return '';

    const params = window.location.hash.substring(1).split('&');
    return params[0].split('=')[1];

    
  }

  definirToken(token: string){
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token', token);
  }
}
