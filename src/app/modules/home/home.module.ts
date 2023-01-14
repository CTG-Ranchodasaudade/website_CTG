import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../pages/home/home.component'

import { SliderShowComponent } from '../../components/slider-show/slider-show.component';
import {CardArticleComponent} from '../../components/card-article/card-article.component';
import {MidiaInstitucionalComponent} from '../../components/midia-institucional/midia-institucional.component';


@NgModule({
  declarations: [
    HomeComponent,
    SliderShowComponent,
    CardArticleComponent,
    MidiaInstitucionalComponent
  ],
  exports: [
    HomeComponent,
    SliderShowComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class HomeModule { }
