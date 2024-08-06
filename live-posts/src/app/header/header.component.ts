import { Component } from '@angular/core';
import { BackEndService } from '../back-end.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private backEndServices:BackEndService){}

  onSave(){
    console.log("onSave Called!");
    this.backEndServices.SaveData();
  }

  onfetch(){
    console.log("onfetch called!");
    this.backEndServices.fetchData();
  }
  ngOnInit():void{
    this.onfetch();
  }

}
