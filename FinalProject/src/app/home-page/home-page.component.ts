import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  public imagesUrl;

  ngOnInit() {
    this.imagesUrl = [
      './assets/1.jpg',
      './assets/2.jpg',
      './assets/3.png',
      './assets/4.jpeg',
      './assets/4.jpeg',
    
      ];
  }

}
