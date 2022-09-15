import { Component, OnInit } from '@angular/core';
import { SpotifyReturnService } from 'src/app/services/spotify-return.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private spotifyService: SpotifyReturnService) { }

  ngOnInit() {
    this.verificarToken();  
  }

  verificarToken(){
    const token = this.spotifyService.tokenUrl();
    if(!!token){
      this.spotifyService.definirToken(token);
    }
  }
  

  ativeBtn(){
    window.location.href = this.spotifyService.obterUrl();
  }

}
