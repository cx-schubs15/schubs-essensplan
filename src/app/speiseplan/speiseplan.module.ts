import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SpeiseplanPage } from './speiseplan.page';
import { MatInputModule, MatNativeDateModule ,MatFormFieldModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';

const routes: Routes = [
  {
    path: '',
    component: SpeiseplanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule
  ],
  declarations: [SpeiseplanPage]
})
export class SpeiseplanPageModule {}
