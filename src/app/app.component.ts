import { Component, OnInit } from '@angular/core';
import { ModeloPersona } from 'src/app/model/persona-model';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'angular-crm-app';
  name: string;
  persona: ModeloPersona = new ModeloPersona();
  listPersona: ModeloPersona[] = new Array<ModeloPersona>();
  loggedInUserName: string;

  listEstado: any = [];

  constructor(public router: Router,
              public servicio: PersonaService) { }

  ngOnInit() {
    this.listEstado = [
      { id: 'true', value: 'Activo' },
      { id: 'false', value: 'Inactivo' }
    ];
    this.persona.edad = 30;

    const content = Xrm.Utility.getGlobalContext();
    this.loggedInUserName = content.userSettings.userName;
    console.log('usuario = ' + this.loggedInUserName);
  }

  enviarFormulario() {
    this.listPersona.push(this.persona);
    this.router.navigate(['login']);
  }

  llamarServicio() {

    this.servicio.getPrueba().subscribe(
      result => {
        console.log('este es un metodo GET: ');
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
  }

  llamarServicioPOST() {

    this.servicio.getPost().subscribe(
      result => {
        console.log('este es un metodo POST: ');
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
  }
}
