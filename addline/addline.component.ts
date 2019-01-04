import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-addline',
  templateUrl: './addline.component.html',
  styleUrls: ['./addline.component.scss']
})
export class AddlineComponent implements OnInit {
  name: string;
  id: number;
  numberofstobs:Number;
  numberofbuss: number;
  from: string;
  to: string;
  
  constructor() { }

  ngOnInit() {
  }
  // onRegister() {
  //   if (!this.name || !this.id || !this.from|| !this.to|| !this.numberofbuss|| !this.numberofstobs) {
  //     console.log("d");
  //     this._flashMessagesService.show('All fields are required', { cssClass: 'alert-danger' });
  //     return false;
  //   }
  //   else{      this._flashMessagesService.show('sucsess', { cssClass: 'alert-danger' });
  // }
  // }
}
