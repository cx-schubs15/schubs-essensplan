import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Service } from '../services/service';
import { combineLatest } from 'rxjs';
var SpeiseplanPage = /** @class */ (function () {
    function SpeiseplanPage(service) {
        this.service = service;
        this.selectedDate = new Date();
    }
    SpeiseplanPage.prototype.ngOnInit = function () {
        this.getSpeiseplan();
    };
    SpeiseplanPage.prototype.getGericht = function (id) {
        this.service.ladeGericht(id).subscribe(function (gericht) { return console.log(gericht); });
    };
    SpeiseplanPage.prototype.getSpeiseplan = function () {
        var _this = this;
        combineLatest(this.service.ladeHauptgerichte(this.selectedDate), this.service.ladeBeilagen(this.selectedDate))
            .subscribe(function (x) {
            _this.hauptgerichte = x[0];
            _this.beilagen = x[1];
            _this.loadingFinished = true;
        }, function () { return _this.loadingFinished = true; });
    };
    SpeiseplanPage.prototype.datumChange = function () {
        this.getSpeiseplan();
    };
    SpeiseplanPage = tslib_1.__decorate([
        Component({
            selector: 'app-speiseplan',
            templateUrl: './speiseplan.page.html',
            styleUrls: ['./speiseplan.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Service])
    ], SpeiseplanPage);
    return SpeiseplanPage;
}());
export { SpeiseplanPage };
//# sourceMappingURL=speiseplan.page.js.map