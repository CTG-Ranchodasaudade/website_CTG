import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../../pages/about/about.component';
import{ HomeModule } from '../home/home.module';

import {QuadroImagensComponent} from '../../components/quadro-imagens/quadro-imagens.component';
import {HistoriaComponent} from '../../components/historia/historia.component';
import {GalleryAboutComponent} from '../../components/gallery-about/gallery-about.component';
import {PhotosCardComponent} from '../../components/photos-card/photos-card.component';


@NgModule({
  declarations: [
    AboutComponent,
    QuadroImagensComponent,
    HistoriaComponent,
    GalleryAboutComponent,
    PhotosCardComponent
  ],
  exports:[
    AboutComponent,
    QuadroImagensComponent,
    HistoriaComponent,
    GalleryAboutComponent,
    PhotosCardComponent
  ],
  imports: [
    CommonModule,
    HomeModule
  ]
})
export class AboutModule { }
