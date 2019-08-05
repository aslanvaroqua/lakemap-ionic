import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
var LakeDataService = /** @class */ (function () {
    function LakeDataService(http) {
        this.http = http;
        console.log('Hello LakeDataService Provider');
    }
    /**
    * Get daily point data from the lakeserver  in geojson
    * map the result to return only the results that we need
    *
    * @returns Observable with the results in geojson format
    */
    LakeDataService.prototype.lakeTemperatures = function () {
        return this.http.get('https://gis.lakemonster.com/geoserver/master/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=master%3Alakes&outputFormat=application%2Fjson').pipe(map(function (results) { return results; }));
    };
    LakeDataService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], LakeDataService);
    return LakeDataService;
}());
export default LakeDataService;
//# sourceMappingURL=lake-data.service.js.map