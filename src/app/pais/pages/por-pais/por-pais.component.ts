import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {
  
  termino: string = 'ec';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor( private paisService: PaisService ) { }

  buscar() {
    this.hayError = false;
    console.log(this.termino);

    this.paisService.buscarPais(this.termino)
      .subscribe( (paises) => {
        this.paises = paises


      }, (err) => {
        this.hayError = true;
        this.paises = [];
      });

  }
  

}
