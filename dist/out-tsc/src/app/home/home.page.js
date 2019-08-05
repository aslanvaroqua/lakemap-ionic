import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { Platform } from '@ionic/angular';
import LakeDataService from '../lake-data.service';
var HomePage = /** @class */ (function () {
    function HomePage(platform, lakeservice) {
        var _this = this;
        this.platform = platform;
        this.lakeservice = lakeservice;
        this.platform.ready().then(function () {
            _this.leafletMap();
        });
    }
    HomePage.prototype.leafletMap = function () {
        var _this = this;
        this.map = L.map('mapId', {
            center: this.center,
            zoom: 15
        }).fitBounds([[37.83209906858784, -118.51228020988862], [42.53762001706323, -107.10062636955132]]);
        ;
        L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {}).addTo(this.map);
        function style_lakes_1_0() {
            return;
        }
        this.map.fitBounds([[37.83209906858784, -118.51228020988862], [42.53762001706323, -107.10062636955132]]);
        var highlightLayer;
        function highlightFeature(e) {
            highlightLayer = e.target;
            if (e.target.feature.geometry.type === 'LineString') {
                highlightLayer.setStyle({
                    color: '#ffff00',
                });
            }
            else {
                highlightLayer.setStyle({
                    fillColor: '#ffff00',
                    fillOpacity: 1
                });
            }
            highlightLayer.openPopup();
        }
        function pop_lakes_1(feature, layer) {
            layer.on({
                mouseover: highlightFeature
            });
        }
        this.map.createPane("pane_lakes_1");
        this.lakeservice.lakeTemperatures().subscribe(function (data) {
            L.geoJSON(data['features'], {
                pointToLayer: function (feature, latlng) {
                    console.log(feature);
                    console.log(latlng);
                    var context = {
                        feature: feature,
                        variables: {}
                    };
                    return L.circleMarker(latlng, {
                        pane: 'pane_lakes_1',
                        radius: 5.1,
                        opacity: 1,
                    });
                }
            }).addTo(_this.map);
        });
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Platform, LakeDataService])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map