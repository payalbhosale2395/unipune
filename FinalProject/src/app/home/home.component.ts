import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }


  public imagesUrl;

  ngOnInit()
  {
    this.imagesUrl = [
      './assets/1.jpg',
      './assets/2.jpg',
      './assets/3.png',
      './assets/4.jpeg',
      './assets/4.jpeg',  
      ];
  }
  public next()
  {
    this.router.navigateByUrl('/log-in');
  }
  

}
