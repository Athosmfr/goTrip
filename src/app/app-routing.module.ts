import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ListarComponent } from './admin/listar/listar.component';
import { IncluirComponent } from './admin/incluir/incluir.component';
import { AtualizarComponent } from './admin/atualizar/atualizar.component';
import { ExcluirComponent } from './admin/excluir/excluir.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: "passagens", component: ListarComponent },
      { path: "passagens/incluir", component: IncluirComponent },
      { path: "passagens/atualizar/:id", component: AtualizarComponent },
      { path: "passagens/excluir/:id", component: ExcluirComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'pesquisa', component: PesquisaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
