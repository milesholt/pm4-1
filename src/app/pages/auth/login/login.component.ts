import { Component, OnInit } from '@angular/core';
//import { IonicModule } from '@ionic/angular';

import { AuthService } from "../../../services/external/firebase/AuthService/auth.service";

@Component({
  //standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  //imports:[IonicModule]
})
export class LoginComponent  implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {}

}
