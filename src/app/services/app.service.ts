import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { Formacion } from '../models/Formacion';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = "/assets/db.json";

  constructor(private http: HttpClient) { }

  getFormaciones(): Observable<any[]>{
    return this.http.get<any[]>(this.url)
  }

  
}
