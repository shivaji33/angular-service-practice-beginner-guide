import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { UserService } from './user.service';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, HomeComponent],
  template: `
   <app-home></app-home>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [UserService]
});
