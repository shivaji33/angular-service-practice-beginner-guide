import { Injectable } from '@angular/core';

const DUMMY_DATA = {
  id: '422',
  name: 'Shivaji',
  gender: 'Male'
}
@Injectable()
export class UserService {
  private user = {...DUMMY_DATA};
  constructor() { }


  getUserDetails() {
    return this.user;
  }

  updateUserName(name: string) {
    if (!name || name.length < 3) {
      
      throw Error('Invalid User Name')
    }
    this.user.name = name;
    return this.user;
  }

}