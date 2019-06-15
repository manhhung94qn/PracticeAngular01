import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smartphone-component',
  templateUrl: './smartphone-component.component.html',
  styleUrls: ['./smartphone-component.component.scss']
})
export class SmartphoneComponentComponent implements OnInit {

  constructor() { };
  listSmartPhone = [
    {
      url: "./assets/img/sp_iphoneX.png",
      name: "iPhone X",
      descrip: "iPhone X features a new all-screen design. Face ID, which makes your face your password",
    },
    {
      url: "./assets/img/sp_note7.png",
      name: "Galaxy Note 7",
      descrip: "The Galaxy Note7 comes with a perfectly symmetrical design for good reason",
    },
    {
      url: "./assets/img/sp_vivo850.png",
      name: "Vivo",
      descrip: "A young global smartphone brand focusing on introducing perfect sound quality",
    },
    {
      url: "./assets/img/sp_blackberry.png",
      name: "BlackBerry",
      descrip: "BlackBerry is a line of smartphones, tablets, and services originally designed",
    },
  ];
  ngOnInit() {
  }

}
