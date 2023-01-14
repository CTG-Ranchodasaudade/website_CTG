import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from '../app/modules/home/home.module';
import { AboutModule } from '../app/modules/about/about.module';
import { ArtisticModule } from '../app/modules/artistic/artistic.module';
import { ContatoModule } from '../app/modules/contato/contato.module';

import{MenuLogoComponent} from '../app/components/menu-logo/menu-logo.component'
import {MenuBarComponent} from '../app/components/menu-bar/menu-bar.component';
import { FooterDefaultComponent } from './components/footer-default/footer-default.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuLogoComponent,
    MenuBarComponent,
    FooterDefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AboutModule,
    ArtisticModule,
    ContatoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }