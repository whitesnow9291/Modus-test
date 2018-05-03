import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'ng-e-app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.scss']
})
export class AppContentComponent implements OnInit {
  user: User = {
    firstName: 'Ahsan',
    lastName: 'Ayaz'
  };
  isLoggedIn: boolean;
  constructor(private appservie: AppService) { }

  ngOnInit() {
    this.isLoggedIn = false;
    this.appservie.change.subscribe(logged => {
      this.isLoggedIn = logged;
    });
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user in
   */
  login() {
    this.isLoggedIn = true;
    this.appservie.setLoggedStatus(this.isLoggedIn);
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user out
   */
  logout() {
    this.isLoggedIn = false;
    this.appservie.setLoggedStatus(this.isLoggedIn);
  }

}
