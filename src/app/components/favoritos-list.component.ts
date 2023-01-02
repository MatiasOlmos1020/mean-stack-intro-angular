import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { FavoritoService } from '../services/favorito.service';
import { Favorito } from '../models/favorito';

@Component({
    selector: 'favoritos-list',
    templateUrl: '../views/favoritos-list.html',
    providers: [FavoritoService]
})

export class FavoritosListComponent implements OnInit {
    public title: string;
    public errorMessage: any;
    public favoritos: Favorito[];

    constructor(
        private _favoritoService: FavoritoService
    ) {
        this.title = 'Listado de marcadores';
        this.favoritos = [];
    }

    ngOnInit() {
        console.log('FavoritosListComponent cargado.');
        this._favoritoService.getFavoritos().subscribe(
            result => {
                console.log(result);
                this.favoritos = result.favoritos;

                if(!this.favoritos){
                    alert('error en el servidor');
                }
            },
            error => {
                this.errorMessage = <any>error;
                if (this.errorMessage != null) {
                    console.log(this.errorMessage);
                    alert('Error en la peticion')
                }
            }
        );
    }

}