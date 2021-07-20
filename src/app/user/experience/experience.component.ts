import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cpde2-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  public experienceDetail = '' ;
  constructor(
       private router: Router,
  ) { }

  ngOnInit(): void {
  }


  gotoExperienceDetail(): void {
    this.router.navigateByUrl('/usuario/experiencias/' + this.experienceDetail);
  }

}
