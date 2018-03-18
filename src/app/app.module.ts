import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { UrlSerializer } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgNodejsMongoAppModule } from './ngNodejsMongoApp/ng-nodejs-mongo-app.module';
import { SharedModule } from './shared/shared.module';
import { LibraryModule } from './lib/lib.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    LibraryModule,
    BrowserAnimationsModule,
    NgNodejsMongoAppModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
  schemas: [ ]
})
export class AppModule { }
