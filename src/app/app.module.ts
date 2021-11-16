import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InpatientAuthComponent } from './inpatient-auth/inpatient-auth.component';
import { ProcedureAuthComponent } from './procedure-auth/procedure-auth.component';
import { ProviderComponent } from './provider/provider.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';
import { CdkTableModule } from '@angular/cdk/table';
import {MatTableModule} from '@angular/material/table';
import { AuthServiceService } from './services/auth-service.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InpatientAuthComponent,
    ProcedureAuthComponent,
    ProviderComponent,
    PageNotFoundComponentComponent,
    ],
  imports: [
    BrowserModule,
    MatSidenavModule,MatListModule,MatTabsModule,MatSortModule,CdkTableModule,MatTableModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
