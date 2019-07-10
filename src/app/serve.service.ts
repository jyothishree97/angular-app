import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServeService {

  constructor( private http: HttpClient) { }
   getAtrtist(name) {
     // tslint:disable-next-line:max-line-length
     return this.http.get('http://ws.audioscrobbler.com/2.0/?method=artist.search&artist= ' + name + '&api_key=08f7d080a4c0b60e595128bfa67407cd&format=json');
   }
}

