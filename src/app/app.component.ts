import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'ANGULAR ' + VERSION.major;
  public headers = ['Name', 'Subject', 'Mark'];
  public rows = [
    {
      Name: 'Ramesh',
      Subject: 'English',
      Mark: '71',
    },
    {
      Name: 'Suresh',
      Subject: 'English',
      Mark: '80',
    },
    {
      Name: 'Ramesh',
      Subject: 'Science',
      Mark: '78',
    },
    {
      Name: 'Suresh',
      Subject: 'Science',
      Mark: '88',
    },
  ];
}
