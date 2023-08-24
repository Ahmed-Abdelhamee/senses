import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  texts:any[]=[
    {text:" RPA Consultation and Implementation ",url:"/rpa"},
    {text:" IOT Internet Of Things",url:"/iot"},
    {text:" Digital Transformation and Government E-services ",url:"/digital"},
    {text:" Document Tracking Using RFID",url:"/tracking"},
    {text:" RFID Solutions & E-Facilities",url:"/rfid"},
    {text:" Web Development & Mobile Development",url:"/contact"},
    {text:" Cyber Security",url:"/#"},
    {text:" Low Current System",url:"/#"},
    {text:" Robots",url:"/#"},
    {text:" Chatbot",url:"/#"},
    {text:" Deep learning",url:"/#"},
  ]

  getTexts(){
    return this.texts;
  }
}
