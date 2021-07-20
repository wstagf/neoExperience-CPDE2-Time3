import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'cpde2-experience-detail',
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.css']
})
export class ExperienceDetailComponent implements OnInit {
  public  selectedExperience = '';
  constructor(    private router: Router,
                  private route: ActivatedRoute
  ) { }

  public imageList = [
    '../assets/goias/pablo-regino_centro-histrico_gois_go_27667734998_o.jpg',
    '../assets/goias/pabloregino_artesanato_goias_go_39162647210_o.jpg',
    '../assets/goias/pabloregino_igrejamatrizdesantana_goias_go_40262215954_o.jpg',
    '../assets/goias/pabloregino_artesanato_goias_go_40929541482_o.jpg',
    '../assets/goias/pabloregino_igrejanossasenhoradorosario_goias_go_40262193214_o.jpg',
    '../assets/goias/pabloregino_cachoeiradasandorinhas_goias_go_40929521972_o.jpg',
    '../assets/goias/pabloregino_igrejanossasenhoradorosario_goias_go_40971051821_o.jpg',
    '../assets/goias/pabloregino_casadecoracoralina_goias_go_26099941807_o.jpg',
    '../assets/goias/pabloregino_igrejasantabarbara_goias_go_40971034151_o.jpg',
    '../assets/goias/pabloregino_casadecoracoralina_goias_go_27100466988_o.jpg',
    '../assets/goias/pabloregino_igrejasaofranciscodepaula_goias_go_40077745015_o.jpg',
    '../assets/goias/pabloregino_centrohistorico_goias_go_27100445708_o.jpg',
    '../assets/goias/pabloregino_mercadomunicipal_goias_go_39162433730_o.jpg',
    '../assets/goias/pabloregino_centrohistorico_goias_go_40077881725_o.jpg',
    '../assets/goias/pabloregino_mercadomunicipal_goias_go_40262169744_o.jpg',
    '../assets/goias/pablo-regino_centro-histrico_gois_go_27667734998_o.jpg',
    '../assets/goias/pabloregino_museuartesacradaboamorte_goias_go_40262153394_o.jpg',
    '../assets/goias/pabloregino_chafarizdecauda_goias_go_27100423098_o.jpg',
    '../assets/goias/pabloregino_museuartesacradaboamorte_goias_go-_40262160604_o.jpg',
    '../assets/goias/pablo-regino_chafariz-de-cauda_goias_go_39728628730_o.jpg',
    '../assets/goias/pabloregino_museudasbandeiras_goias_go_40929311742_o.jpg',
    '../assets/goias/pabloregino_gastronomia_goias_go_27100382938_o.jpg',
    '../assets/goias/pabloregino_palaciocondedosarcos_goias_go_26099749767_o.jpg',
    '../assets/goias/pabloregino_gastronomia_goias_go_39162550310_o.jpg',
    '../assets/goias/pabloregino_pracachafariz_goias_go_39162418870_o.jpg',
    '../assets/goias/pabloregino_gastronomia_goias_go_40262269474_o.jpg',
    '../assets/goias/pabloregino_pracadocoreto_goias_go_39162397570_o.jpg',
    '../assets/goias/pabloregino_gastronomia_gois_go_26668774087_o.jpg',
    '../assets/goias/pabloregino_pracadocoreto_goias_go_40077671435_o.jpg',
    '../assets/goias/pabloregino_igrejamatrizdesantana_goias_go_39162533580_o.jpg',
    '../assets/goias/pabloregino_riovermelho_goias_go_40262070784_o.jpg',
  ];

   ngOnInit(): void {
     this.selectedExperience = this.route.snapshot.url[1].path;
   }


}
