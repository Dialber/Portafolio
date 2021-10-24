import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-module-routing.module';
import { FormComponent } from './components/form/form.component';
import { SharedModule } from '../shared-module/shared.module';
import { FormMainComponent } from './components/form-main/form-main.component';
import { FileComponent } from './components/file/file.component';


@NgModule({
  declarations: [
    FormComponent,
    FormMainComponent,
    FileComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule
  ],
  exports: [
    FormMainComponent
  ]
})
export class ContactModuleModule { }
