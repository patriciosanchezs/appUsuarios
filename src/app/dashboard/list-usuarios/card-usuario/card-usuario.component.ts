import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css']
})
export class CardUsuarioComponent implements OnInit {

  @Input() user: any;
  imgUrl: string;
  firstName: string;
  email: string;
  id: number;

  constructor() { 
    this.imgUrl = 'https://picsum.photos/seed/picsum/536/354';

  }

  ngOnInit(): void {
    this.firstName = this.user.name;
    this.email = this.user.email;
    this.id = this.user.id;
  }

}
