import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InpatientAuthComponent } from './inpatient-auth/inpatient-auth.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { ProcedureAuthComponent } from './procedure-auth/procedure-auth.component';
import { ProviderComponent } from './provider/provider.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'inpatient', component: InpatientAuthComponent },
  { path: 'procedure', component: ProcedureAuthComponent },
  { path: 'provider', component: ProviderComponent },
  { path: '**', component: PageNotFoundComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
