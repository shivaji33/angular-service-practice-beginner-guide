import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  standalone: true
})
export class NavBarComponent implements OnInit {
  imgUrl = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
  user: any = {};
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUserDetails();
  }

}