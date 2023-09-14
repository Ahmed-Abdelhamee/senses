import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RpaComponent } from './rpa/rpa.component';
import { IotComponent } from './iot/iot.component';
import { DigitalComponent } from './digital/digital.component';
import { ContactComponent } from './contact/contact.component';
import { TrackingComponent } from './tracking/tracking.component';
import { RfidComponent } from './rfid/rfid.component';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({ 
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicesComponent,
    FooterComponent,
    HomeComponent,
    RpaComponent,
    IotComponent,
    DigitalComponent,
    ContactComponent,
    TrackingComponent,
    RfidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
