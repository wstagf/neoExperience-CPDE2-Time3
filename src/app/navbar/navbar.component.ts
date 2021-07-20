import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cpde2-nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public menuVisible = 1;
  constructor() { }

  ngOnInit(): void {
  }

  portalAcess(param: string): void {
    if ( param === 'user') {
      this.menuVisible = 2;
    } else {
      if ( param === 'place') {
        this.menuVisible = 3;
      }
    }
  }

  logout(): void {
    this.menuVisible = 1;
  }

}
