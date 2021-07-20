import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'cpde2-nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public menuVisible = 1;
  constructor(
      private router: Router
  ) { }

  ngOnInit(): void {
  }

  portalAcess(param: string): void {
    if ( param === 'user') {
      this.menuVisible = 2;
      this.router.navigateByUrl('/usuario/experiencias');
    } else {
      if ( param === 'place') {
        this.menuVisible = 3;
        this.router.navigateByUrl('/estabelecimento/perfil');
      }
    }
  }

  logout(): void {
    this.menuVisible = 1;
    this.router.navigateByUrl('/home');
  }

}
