import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DonutList } from '../models/donut-list';
import { Donut } from '../models/donut';

@Injectable({
  providedIn: 'root'
})
export class DonutService {

  apiUrl:string = "https://grandcircusco.github.io/demo-apis/donuts";
  ending:string = ".json";
  constructor(private http:HttpClient) { }

  getAll():Observable<DonutList>{
    return this.http.get<DonutList>(`${this.apiUrl}${this.ending}`);
  }
  getById(id:number):Observable<Donut>{
    return this.http.get<Donut>(`${this.apiUrl}/${id}${this.ending}`);
  }
}
