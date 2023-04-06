import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Formacion } from 'src/app/models/Formacion';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-formacion-list',
  templateUrl: './formacion-list.component.html',
  styleUrls: ['./formacion-list.component.css']
})
export class FormacionListComponent {

  formaciones: any;

  constructor(private service: AppService, private router: Router) { 
  }

  ngOnInit(): void {
    this.service.getFormaciones().subscribe(data => {
      this.formaciones = data;
    })
   
  }

}
