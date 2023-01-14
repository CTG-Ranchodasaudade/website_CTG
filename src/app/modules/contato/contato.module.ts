import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoComponent } from '../../pages/contato/contato.component';
import {HomeModule} from '../home/home.module';


@NgModule({
  declarations: [
    ContatoComponent
  ],
  exports:[
    ContatoComponent
  ],
  imports: [
    CommonModule,
    HomeModule
  ]
})
export class ContatoModule { }
