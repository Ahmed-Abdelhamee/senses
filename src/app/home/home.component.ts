import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  imgs:string[]=["assets/Graphic_Elements.png","assets/Graphic_Elements (2).png","assets/Graphic_Elements (1).png","assets/Graphic_Elements (3).png","assets/image 1.png","assets/Asset 8.png","assets/Asset 9.png","assets/Asset 11.png"]
  imgs2:string[]=["assets/1.png","assets/2.png","assets/3.png","assets/4.png","assets/5.png"]

  ngOnInit(): void {

  }
  i=0;
  left(){
    // for side animation
    // l.childNodes[1].style.opacity=`1`;
    // l.childNodes[1].style.transform=`translateX(${this.i}%)`;
    // l.childNodes[1].style.transition=`1s`;
    // l.childNodes[1].style.zIndex="2";
    // l.childNodes[1].style.width="25%";

    this.imgs.splice(0,0,`${this.imgs.splice(this.imgs.length-1,1)}`)
  }

  right(){
    this.i=0;
    this.imgs.splice(this.imgs.length-1,0,`${this.imgs.splice(0,1)}`)
  }


  left2(l:any){
    // for side animation
    // l.childNodes[1].style.opacity=`1`;
    // l.childNodes[1].style.transform=`translateX(${this.i}%)`;
    // l.childNodes[1].style.transition=`1s`;
    // l.childNodes[1].style.zIndex="2";
    // l.childNodes[1].style.width="25%";
    this.imgs2.splice(0,0,`${this.imgs2.splice(this.imgs2.length-1,1)}`)
  }

  right2(l:any){
    this.i=0;
    this.imgs2.splice(this.imgs2.length-1,0,`${this.imgs2.splice(0,1)}`)
  }
}
