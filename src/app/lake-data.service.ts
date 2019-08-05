import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
 export default class LakeDataService {

  constructor(private http: HttpClient) {
    console.log('Hello LakeDataService Provider');
}

  /**
  * Get daily point data from the lakeserver  in geojson
  * map the result to return only the results that we need
  * 
  * @returns Observable with the results in geojson format
  */
 lakeTemperatures(): Observable<any> {
 // return this.http.get('https://gis.lakemonster.com/geoserver/master/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=master%3Alakes&outputFormat=application%2Fjson').pipe(
    return this.http.get('http://lakemonster.s3-us-west-2.amazonaws.com/temperatures.json').pipe(
   map(results => results)
  );
}

}
