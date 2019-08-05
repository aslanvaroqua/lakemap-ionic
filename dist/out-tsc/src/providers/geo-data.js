import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var GeoDataProvider = /** @class */ (function () {
    function GeoDataProvider(http) {
        this.http = http;
        console.log('Hello GeoserverData Provider');
    }
    GeoDataProvider = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], GeoDataProvider);
    return GeoDataProvider;
}());
export { GeoDataProvider };
//# sourceMappingURL=geo-data.js.map