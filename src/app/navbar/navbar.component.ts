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
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe((url: any) => {
      const urlString = url.url;
      if (urlString !== '/' && urlString != null) {
        const urlArray = urlString.split('/');
        if (urlArray.length > 0) {
          console.log(urlArray);
          if (urlArray[1] === 'usuario' ) {
            this.menuVisible = 2;
          } else if (urlArray[1] === 'estabelecimento' ) {
            this.menuVisible = 3;
          }
        }
      }
     });
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
