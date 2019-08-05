import { Component } from '@angular/core';
import * as  L from 'leaflet';
import 'leaflet-routing-machine';
import { Platform } from '@ionic/angular';
import LakeDataService from '../lake-data.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  map: L.Map;
  center: L.PointTuple;
 
  constructor(public platform: Platform, public lakeservice:LakeDataService) 
  {
        this.platform.ready().then(() =>
    {
      this.leafletMap();
    })
  }



  leafletMap()
  {
    this.map = L.map('mapId', 
    {
      center: this.center,
      zoom: 15
    })

    L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {}).addTo(this.map);

    
    function style_lakes_1_0() {
      return 
  }

  this.map.fitBounds([[37.83209906858784,-118.51228020988862],[42.53762001706323,-107.10062636955132]]);

  var highlightLayer;
  function highlightFeature(e) {
    highlightLayer = e.target;

    if (e.target.feature.geometry.type === 'LineString') {
      highlightLayer.setStyle({
        color: '#ffff00',
      });
    } else {
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
  })
}

this.map.createPane("pane_lakes_1");
this.map.createPane("pane_lakes_2");

this.lakeservice.lakeTemperatures().subscribe(data => {
  L.geoJSON(data['features'], {
    pointToLayer: function (feature, latlng) {

      console.log(feature);
      console.log(latlng)
      var context = {
          feature: feature,
          variables: {}
      };
      var myIcon = L.divIcon({className: 'my-div-icon'});
      // // you can set .my-div-icon styles in CSS
      myIcon['html']=feature['properties']['ECO_LST_F'].toString()+feature['properties']['ECO_LST_F'].toString()+"°F";

  
      // you can set .my-div-icon styles in CSS
      // return L.marker(latlng, {
      //   icon: L.divIcon({
      //     html: feature['properties']['ECO_LST_F'].toString+"°F",
      //     className: 'my-div-icon'
      //   })
      // }).addTo(this.map);
      // you can set .my-div-icon styles in CSS
    
//       var marker =  L.marker(latlng, { opacity: 1 }); //opacity may be set to zero
//       marker.bindTooltip("LST", {pane: 'pane_lakes_2',permanent: true, className: "F", offset: [0, 0] });
//       return marker.addTo(this.map);
      return L.Marker(latlng, {
        icon:myIcon
      })
    }
  }).addTo(this.map);
});
}
}
