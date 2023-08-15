import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  texts:string[]=[]
  constructor(private dataService:DataService) {
    this.texts=dataService.getTexts();
   }

  ngOnInit(): void {
  }

}
