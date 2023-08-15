import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  texts:string[]=[
    " RPA Consultation and Implementation ",
    " IOT Internet Of Things",
    " Digital Transformation and Government E-services ",
    " Document Tracking Using RFID",
    " RFID Solutions & E-Facilities",
    " Web Development & Mobile Development",
    " Cyber Security",
    " Low Current System",
    " Robots",
    " Chatbot",
    " Deep learning",
  ]

  getTexts(){
    return this.texts;
  }
}
