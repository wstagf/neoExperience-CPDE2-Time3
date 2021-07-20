import { ExperienceDetailComponent } from './usuario/experience-detail/experience-detail.component';
import { PerfilComponent } from './place/perfil/perfil.component';
import { ActivitysComponent } from './place/activitys/activitys.component';
import { WalletComponent } from './place/wallet/wallet.component';
import { ClubComponent } from './user/club/club.component';
import { ControlComponent } from './user/control/control.component';
import { ExperienceComponent } from './user/experience/experience.component';
import { PortalAccessComponent } from './portal-access/portal-access.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: 'home', component: HomeComponent },
   { path: 'facaparte', component: SubscribeComponent },
   { path: 'acesso', component: PortalAccessComponent },
   {
    path: 'usuario',
    children: [
      {
          path: 'experiencias',
          component: ExperienceComponent
      },
       {
          path: 'experiencias/:target',
          component: ExperienceDetailComponent
      },
      {
        path: 'controle',
        component: ControlComponent
      },
      {
        path: 'clube',
        component: ClubComponent
      },
    ]
  },
   {
    path: 'estabelecimento',
    children: [
      {
          path: 'perfil',
          component: PerfilComponent
      },
      {
        path: 'atividades',
        component: ActivitysComponent
      },
      {
        path: 'carteira',
        component: WalletComponent
      },
    ]
  },
   { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
