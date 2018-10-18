import { Component } from '@angular/core';
import {User} from './user';
import {RollService} from './roll.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;

  userModel = new User('joe', 'mike@test.com', 4564567876, 'default', 'morning',
    true);

  constructor(private _enrollService: RollService) {}

  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }


  onSubmit() {
    console.log(this.userModel);
    this._enrollService.enroll(this.userModel)
      .subscribe( data => console.log('success!!', data),
        error => console.log('error!!', error))
  }

}
