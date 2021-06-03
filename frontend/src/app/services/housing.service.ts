import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { IProperty } from '../property/IProperty.interface';


@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllProperties() {
    return this.http.get<Array<IProperty>>('data/property.json')
  }
}
