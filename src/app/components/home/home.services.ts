import { Component, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeServices {
    constructor(private http: Http) { }
    getJSON(): Observable<any> {
        return this.http.get('https://api.github.com/search/users?q=eric').map((res: any) => res.json());
    }
}
