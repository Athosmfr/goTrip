import { Component, OnInit } from '@angular/core';
import { Produto } from '../../models/produto.model';
import { CadastroService } from 'src/cadastro.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
