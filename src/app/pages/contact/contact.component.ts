import { Component, OnInit } from '@angular/core';
interface info {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  selectedValue: string | undefined;
  contact: info[] = [
    {value: '+93_9563750109', viewValue: 'Phone Number'},
    {value: 'jaysoncolipano@facebook.com', viewValue: 'FaceBook'},

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
