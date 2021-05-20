import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  id: number;
  nombre: string;
  email: string;
  sexo: string;
  estado: string;
  fechaCreacion: string;
  loading: boolean;

  constructor(private _usuarioService: UsuarioService, private aRoute: ActivatedRoute) {
    this.id = +aRoute.snapshot.paramMap.get('id');
    this.loading = false;
   }

  ngOnInit(): void {
    this.obtenerUsuario();
  }

  obtenerUsuario(): void {
    this.loading = true;
    this._usuarioService.getUser(this.id).subscribe(usuario => {
      console.log(usuario);
      this.nombre = usuario.data.name;
      this.email = usuario.data.email;
      this.sexo = usuario.data.gender;
      this.estado = usuario.data.status;
      this.fechaCreacion = usuario.data.created_at;
      this.loading = false;
    }, error => {
      console.log(error);
    })
  }

}
