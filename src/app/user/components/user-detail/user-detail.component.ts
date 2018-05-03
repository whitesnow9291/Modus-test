import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { User } from '../../models/user.model';

@Component({
  selector: 'ng-e-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  selectedId: number;
  userdetail: User;
  private sub: any;
  constructor(private userservice: UserServiceService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.selectedId = +params['id']; // (+) converts string 'id' to a number
      this.userdetail = this.userservice.getUsers()[this.selectedId];
      if (!this.userdetail) {
        this.router.navigate(['users']);
      }
      // In a real app: dispatch action to load the details here.
   });
  }

}
