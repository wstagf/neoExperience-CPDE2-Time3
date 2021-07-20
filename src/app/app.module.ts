import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { PortalAccessComponent } from './portal-access/portal-access.component';
import { ExperienceComponent } from './user/experience/experience.component';
import { ControlComponent } from './user/control/control.component';
import { ClubComponent } from './user/club/club.component';
import { PerfilComponent } from './place/perfil/perfil.component';
import { ActivitysComponent } from './place/activitys/activitys.component';
import { WalletComponent } from './place/wallet/wallet.component';
import { ExperienceDetailComponent } from './usuario/experience-detail/experience-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SubscribeComponent,
    PortalAccessComponent,
    ExperienceComponent,
    ControlComponent,
    ClubComponent,
    PerfilComponent,
    ActivitysComponent,
    WalletComponent,
    ExperienceDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
