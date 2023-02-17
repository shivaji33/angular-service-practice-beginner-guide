import { Component, OnInit } from '@angular/core';
import { ProfileEditComponent } from '../profile-edit/profile-edit.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone: true,
  imports: [ProfileEditComponent]
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}