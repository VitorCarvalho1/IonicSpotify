import { Injectable } from '@angular/core';
import { spotifyconfiguration } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyReturnService {

  constructor() { }


  obterUrl() {
    const authEndpoint = `${spotifyconfiguration.authEndpoint}?`;
    const clientId = `client_id=${spotifyconfiguration.clientId}&`;
    const redirectUrl = `redirect_uri=${spotifyconfiguration.redirectUrl}&`;
    const scopes = `scope=${spotifyconfiguration.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;
    return authEndpoint + clientId + redirectUrl + scopes + responseType; 
  }
}
