import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from './pages/home/home.component';
import { OnlineCarBuyersComponent } from './pages/customers/auto/online-car-buyers/online-car-buyers.component';
import { PrivateDealersComponent } from './pages/customers/auto/private-dealers/private-dealers.component';
import { DealarshipsComponent } from './pages/customers/auto/dealarships/dealarships.component';
import { AuctionsComponent } from './pages/customers/auto/auctions/auctions.component';
import { OpenCarComponent } from './pages/carriers/auto/open-car/open-car.component';
import { EnclosedCarComponent } from './pages/carriers/auto/enclosed-car/enclosed-car.component';
import { FlatbedCarComponent } from './pages/carriers/auto/flatbed-car/flatbed-car.component';
import { SpecializedCarComponent } from './pages/carriers/auto/specialized-car/specialized-car.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'contact-us', component: ContactUsComponent },

      // customers routers
      {
        path: 'customers', children: [
          { path: 'online-car-buyers', component: OnlineCarBuyersComponent },
          { path: 'private-dealers', component: PrivateDealersComponent },
          { path: 'dealerships', component: DealarshipsComponent },
          { path: 'auctions', component: AuctionsComponent }

        ]
      },

      // carriers routers
      {
        path: 'carriers', children: [
          { path: 'open-car-haulers', component: OpenCarComponent },
          { path: 'enclosed-car-haulers', component: EnclosedCarComponent },
          { path: 'flatbed-car-trailers', component: FlatbedCarComponent },
          { path: 'specialized-cars', component: SpecializedCarComponent }
        ]
      },

      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
