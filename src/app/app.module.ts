import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { AboutPageComponent } from './modules/about/pages/about-page/about-page.component';
import { ToDoBodyComponent } from './shared/components/to-do-body/to-do-body.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
