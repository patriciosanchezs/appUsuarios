import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent implements OnInit {

  listUsuarios: any[];
  loading: boolean;

  constructor(private _usuarioService: UsuarioService,
    private router: Router) { 
    this.listUsuarios = [];
    this.loading = false;
  }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(): void {
    this.loading = true;
    this._usuarioService.getUsuarios().subscribe(data => {
      this.listUsuarios = data.data;
      this.loading = false;
    })
  }

}
