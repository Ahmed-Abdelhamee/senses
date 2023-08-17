import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { RpaComponent } from './rpa/rpa.component';
import { IotComponent } from './iot/iot.component';
import { DigitalComponent } from './digital/digital.component';
=======
import { ContactComponent } from './contact/contact.component';
>>>>>>> e5d6f332a6a965a32925b60c13f4ed0239c75fb3

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicesComponent,
    FooterComponent,
    HomeComponent,
<<<<<<< HEAD
    RpaComponent,
    IotComponent,
    DigitalComponent
=======
    ContactComponent
>>>>>>> e5d6f332a6a965a32925b60c13f4ed0239c75fb3
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
