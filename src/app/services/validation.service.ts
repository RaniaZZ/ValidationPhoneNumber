import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor(private http: HttpClient) {}
  readonly baseURL = "https://apilayer.net/api/validate";
  accessKey : string ='eb588dbf70cb81df1c8d374269db9d18';

  Validate(number : string) {
    return this.http.get(this.baseURL,{params:{access_key:this.accessKey,number:number}});  
  }
}
