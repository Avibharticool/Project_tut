import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products=[
    {name:'laptop'},
    {name:'laptop'},
    {name:'laptop'},
    {name:'laptop'}

  ]
  status:boolean=true;
  onOpen(){
    this.status=true;
  }

  onClose(){
    this.status=false;
  }
 

}
