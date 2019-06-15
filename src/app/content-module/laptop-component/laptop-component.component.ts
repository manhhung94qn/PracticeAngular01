import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laptop-component',
  templateUrl: './laptop-component.component.html',
  styleUrls: ['./laptop-component.component.scss']
})
export class LaptopComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  listLaptop = [
    {
      url: "./assets/img/lt_macbook.png",
      name: "MACBOOK",
      descrip: "The MacBook is a brand of notebook computers manufactured by Apple Inc",
    },
    {
      url: "./assets/img/lt_rog.png",
      name: "ASUS ROG",
      descrip: "the Asus ROG Strix Flare is the latest addition to Asus' lineup of ROG branded devices",
    },
    {
      url: "./assets/img/lt_hp.png",
      name: "HP OMEN",
      descrip: "A young global smartphone brand focusing on introducing perfect sound quality",
    },
    {
      url: "./assets/img/lt_lenovo.png",
      name: "LENOVO THINKPAD",
      descrip: "The ThinkPad X1 Carbon is a high-end notebook computer released by Lenovo in 2012",
    },
  ];

}
