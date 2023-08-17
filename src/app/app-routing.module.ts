import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"services",component:ServicesComponent},
  {path:"rpa",component:RpaComponent},
  {path:"iot",component:IotComponent},
  {path:"digital",component:DigitalComponent},
  {path:"contact",component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
