import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-procduct-component',
  templateUrl: './item-procduct-component.component.html',
  styleUrls: ['./item-procduct-component.component.scss']
})
export class ItemProcductComponentComponent implements OnInit {

  constructor() { };
  @Input() descrip: string;
  @Input() imgurl: string;
  @Input() name: string;
  ngOnInit() {
  }
  clickF(){
    console.log("Hi hung");
  }

}
