import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './services';
import { User } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'peoplemanagement';
  currentUser: User;

  constructor(
    private router: Router,
    private AuthService: AuthService
  ) {
    this.AuthService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.AuthService.logout();
    this.router.navigate(['/login']);
  }
}//
