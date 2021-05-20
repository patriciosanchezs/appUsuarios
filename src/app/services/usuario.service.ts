import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url: string;
  token: string;

  constructor(private http: HttpClient) {
    this.url = 'https://gorest.co.in/public-api/users';
    this.token = '?access-token=fe9ede890cea55d9445c39b8d18f1bbbbff3314a892711a7fe2369668bac161e';
  }

  getUsuarios(): Observable<any> {
    return this.http.get<any>(this.url + this.token);
  }

  getUser(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/' + id + this.token);
  }
}
