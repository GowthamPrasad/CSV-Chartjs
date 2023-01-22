import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FileUploadComponent } from './file-upload/file-upload.component'
import { ChartComponent } from './chart/chart.component';
import { AppComponent } from './app.component';
import { Chart } from 'chart.js';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
