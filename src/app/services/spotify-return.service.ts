import { Injectable } from '@angular/core';
import { spotifyconfiguration } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyReturnService {

  constructor() { }


  obterUrl() {
    const authEndPoint = `${spotifyconfiguration.authEndpoint}?`;
    const clientId = `${spotifyconfiguration.clientId}&`;
    const redirectUrl = `${spotifyconfiguration.redirectUrl}&`;
    const scopes = `scopes=${spotifyconfiguration.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;
    return authEndPoint + clientId + redirectUrl + scopes + responseType;
  }
}
