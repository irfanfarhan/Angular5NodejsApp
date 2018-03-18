import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoadingService } from './services/loading.service';
import { LoginRedirectComponent } from './components/login-redirect/login-redirect.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LibraryModule } from '../lib/lib.module';
import { RestService } from './services/rest.service';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    LibraryModule,
    ToastrModule.forRoot(),
  ],
  declarations: [LoginRedirectComponent, LoaderComponent],
  exports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    LoginRedirectComponent,
    LoaderComponent
  ],
  providers: [LoadingService, RestService]
})
export class SharedModule {}
