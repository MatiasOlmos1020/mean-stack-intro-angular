import { Injectable } from "@angular/core";
import { Http, Response, Headers } from '@angular/http';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { Favorito } from "../models/favorito";

@Injectable()
export class FavoritoService {
    public url: string;
    constructor(private _http: HttpClient) {
        this.url = 'http://localhost:3000/'
    }

    getFavoritos() {
        return this._http
            .get(this.url+'api/favoritos', {})
            .pipe(
                map((res) => {
                    return res;
                }),
                catchError((err) => {
                    return of(err);
                }),
            );
    }
}