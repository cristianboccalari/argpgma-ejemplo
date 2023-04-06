import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Formacion } from 'src/app/models/Formacion';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent {

    @Input() formacion: Formacion = {
      id: 0,
      tipo: '',
      descripcion: '',
      tecnologias: []
    }
    
    constructor(private router: Router) { 
    }



}
