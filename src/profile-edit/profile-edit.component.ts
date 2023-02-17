import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css'],
  standalone: true,
})
export class ProfileEditComponent implements OnInit, AfterViewInit {
  @ViewChild('input', { read: ElementRef }) input: ElementRef;
  constructor(private userServie: UserService) {}

  ngAfterViewInit(): void {}

  ngOnInit() {}

  onSave() {
    this.userServie.updateUserName(this.input.nativeElement.value);
    this.input.nativeElement.value = '';
  }
}
