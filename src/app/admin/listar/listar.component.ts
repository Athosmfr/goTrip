import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/models/produto.model';
import { CadastroService } from 'src/cadastro.service';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  produtos: Produto[];
  colunas: string[] = ['id', 'origem', 'destino', 'data', 'preco', 'taxas', 'acoes'];

  constructor(private service: CadastroService) {
    this.produtos = [];
  }

  ngOnInit(): void {
    this.service.listar().subscribe(produtos => {
      console.log(produtos);
      this.produtos = produtos;
    });
  }

}
