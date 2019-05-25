import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
var Service = /** @class */ (function () {
    function Service(http, datePipe) {
        this.http = http;
        this.datePipe = datePipe;
        var url = 'https://cx-schubsit-api.azurewebsites.net/';
        this.apiUrl = url + 'api/';
        this.imageUrl = url + 'images/';
    }
    /**
     * Lädt die Hauptgerichte für das angegebene Datum.
     * @param datum Das Datum, für das die Gerichte geladen werden sollen.
     */
    Service.prototype.ladeHauptgerichte = function (datum) {
        return this.ladeGerichte(datum, 'haupt');
    };
    /**
     * Lädt die Beilagen für das angegebene Datum.
     * @param datum Das Datum, für das die Gerichte geladen werden sollen.
     */
    Service.prototype.ladeBeilagen = function (datum) {
        return this.ladeGerichte(datum, 'beilagen');
    };
    Service.prototype.ladeGerichte = function (datum, typ) {
        if (datum == undefined)
            return of([]);
        var datumText = this.datePipe.transform(datum, "yyyy-MM-dd");
        var url = this.apiUrl + ("speiseplan/datum/" + datumText);
        if (typ !== undefined) {
            url += "/" + typ;
        }
        return this.http.get(url)
            .pipe(catchError(this.handleError("ladeGerichte datum: " + datumText)));
    };
    /**
     * Behandelt eine fehlgeschlagene HTTP-Operation
     * Lässt die App weiter laufen.
     * @param fehlerMeldung - Name der Fehlgeschlagenen Operation.
     * @param result - Optionaler Wert, der die default-Rückgabe festlegt.
     */
    Service.prototype.handleError = function (fehlerMeldung, result) {
        if (fehlerMeldung === void 0) { fehlerMeldung = 'operation'; }
        return function (fehler) {
            // TODO: send the error to remote logging infrastructure
            console.error(fehlerMeldung + fehler); // log to console instead
            // Let the app keep running by returning an empty result.
            return of(result);
        };
    };
    /**
     * Lädt das Gericht mit der angegebenen ID vom Server.
     * @param id - Die ID, zu der das zugehörige Gericht gesucht werden soll.
     */
    Service.prototype.ladeGericht = function (id) {
        return this.http.get(this.apiUrl + 'gericht/' + id)
            .pipe(catchError(this.handleError("ladeGericht id: " + id)));
    };
    /**
     * Wandelt den angegebenen Pfad in einen absoluten Pfad um.
     * @param pfad - Der zu prüfende relative oder absolute Pfad.
     */
    Service.prototype.getBildPfad = function (pfad) {
        if (pfad != null) {
            if (pfad.startsWith('http://') || pfad.startsWith('https://')) {
                return pfad;
            }
            else {
                return this.imageUrl + pfad;
            }
        }
        else {
            return '../../assets/defaultEssen.jpg';
        }
    };
    /**
     * Prüft, ob die angegebene Kategorie andeutet, dass es sich um ein Hauptgericht handelt.
     * @param kategorie - Die zu prüfende Kategorie.
     */
    Service.prototype.isHauptGericht = function (kategorie) {
        return kategorie.search("Hauptspeise") !== -1;
    };
    Service = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, DatePipe])
    ], Service);
    return Service;
}());
export { Service };
//# sourceMappingURL=service.js.map