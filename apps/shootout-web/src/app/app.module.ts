import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { HomeModule } from './pages/home/home.module';
import { ScheduleModule } from './pages/schedule/schedule.module';
import { StandingsModule } from './pages/standings/standings.module';

import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ButtonModule,
    HomeModule,
    ScheduleModule,
    StandingsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
