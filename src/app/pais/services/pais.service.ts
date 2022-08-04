import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';

  get httpParams () {
    return new HttpParams().set( 'fields', 'name,alpha2Code,alpha3Code,capital,flag,population' );
  }

  constructor( private hhtp: HttpClient ) { }

  buscarPais(termino: string): Observable<Country[]> {

    const url = `${this.apiUrl}/name/${termino}`;

    return this.hhtp.get<Country[]>( url, { params: this.httpParams } );
  }

  buscarCapital(termino: string): Observable<Country[]> {

    const url = `${this.apiUrl}/capital/${termino}`;

    return this.hhtp.get<Country[]>( url, { params: this.httpParams } );
  }

  buscarPaisPorAlphaCode(id: string): Observable<Country> {

    const url = `${this.apiUrl}/alpha/${id}`;

    return this.hhtp.get<Country>( url );
  }

  buscarRegion(region: string): Observable<Country[]> {

    const url = `${this.apiUrl}/regionalbloc/${region}`;

    return this.hhtp.get<Country[]>( url, { params: this.httpParams } );
  }



}
