import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { of } from 'rxjs/observable/of';
import { User } from '../../models/user.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'ng-e-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  userData: User[] = [];
  constructor(private userservice: UserServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // get data from api
    const self = this;
    this.userservice.loadUsers().subscribe((values) => {
      self.userData = values.results.map((el) => {
        const filtered = {
          firstName: el.name.first,
          lastName: el.name.last,
          email: el.email,
          phone: el.cell,
          photo: el.photo
        };
        return filtered;
      });
    });
  }
  showUserDetail(i) {
    this.router.navigate(['users/userdetails', { id: i}]);
  }
}
