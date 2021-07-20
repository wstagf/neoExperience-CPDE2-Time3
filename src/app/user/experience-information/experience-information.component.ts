import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'cpde2-experience-information',
  templateUrl: './experience-information.component.html',
  styleUrls: ['./experience-information.component.css']
})
export class ExperienceInformationComponent implements OnInit {

  public  selectedExperience = '';
  constructor(    private router: Router,  private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.selectedExperience = this.route.snapshot.url[2].path;
   }


}
