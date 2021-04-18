import { Component, OnInit, Input } from '@angular/core';
import {faEnvelope,
faMapMarkedAlt,
faPhone,
faDatabase} from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  user;
  

  faEnvelope=faEnvelope;
  faMapMarkedAlt=faMapMarkedAlt;
  faPhone=faPhone;
  faDatabase=faDatabase;

  email;
  name;
  address;
  date;
  phone;
  age;
  picture;
  
  
  constructor() { }
  

  ngOnInit(): void {
    
  }
  
  onReload(){
    this.picture=this.user.picture?.large;
    this.email=this.user.email;
    this.address=this.user.location?.city + this.user.location?.state;
    this.picture=this.user.picture?.large;
    this.picture=this.user.picture?.large;
    this.picture=this.user.picture?.large;
  }

}
