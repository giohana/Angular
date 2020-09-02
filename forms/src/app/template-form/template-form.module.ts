import { HttpClientModule } from '@angular/common/http';
import { CampoControlErroComponent } from './../campo-control-erro/campo-control-erro.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormDebugComponent } from './../form-debug/form-debug.component';
import { TemplateFormComponent } from './template-form.component';

@NgModule({
  declarations: [ 
    TemplateFormComponent,
    FormDebugComponent,
    CampoControlErroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
     
  ]
})
export class TemplateFormModule { }
