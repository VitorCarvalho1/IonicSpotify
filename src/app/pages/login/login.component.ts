import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyReturnService } from 'src/app/services/spotify-return.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private spotifyService: SpotifyReturnService, private router: Router) { }

  ngOnInit() {
    this.verificarToken();  
  }

  verificarToken(){
    const token = this.spotifyService.tokenUrl();
    if(!!token){
      this.spotifyService.definirToken(token);
      this.router.navigate(['/player']);
    }
  }


  ativeBtn(){
    window.location.href = this.spotifyService.obterUrl();
  }

}
