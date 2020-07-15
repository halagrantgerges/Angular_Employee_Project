import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeEntryComponent } from './employees/employee-entry/employee-entry.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EntryDetailsComponent } from './employees/entry-details/entry-details.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeEntryComponent,
    LoginComponent,
    EntryDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: EmployeesComponent },
      { path: 'login', component: LoginComponent },
      { path: 'entry/:id', component: EntryDetailsComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
