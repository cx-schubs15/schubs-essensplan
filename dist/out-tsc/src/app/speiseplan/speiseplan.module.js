import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SpeiseplanPage } from './speiseplan.page';
import { MatInputModule, MatNativeDateModule, MatFormFieldModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
var routes = [
    {
        path: '',
        component: SpeiseplanPage
    }
];
var SpeiseplanPageModule = /** @class */ (function () {
    function SpeiseplanPageModule() {
    }
    SpeiseplanPageModule = tslib_1.__decorate([
        NgModule({
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
    ], SpeiseplanPageModule);
    return SpeiseplanPageModule;
}());
export { SpeiseplanPageModule };
//# sourceMappingURL=speiseplan.module.js.map