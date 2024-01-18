import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from './pages/home/home.component';
import { OnlineCarBuyersComponent } from './pages/customers/online-car-buyers/online-car-buyers.component';
import { PrivateDealersComponent } from './pages/customers/private-dealers/private-dealers.component';
import { DealarshipsComponent } from './pages/customers/dealarships/dealarships.component';
import { AuctionsComponent } from './pages/customers/auctions/auctions.component';
import { OpenCarComponent } from './pages/carriers/open-car/open-car.component';
import { EnclosedCarComponent } from './pages/carriers/enclosed-car/enclosed-car.component';
import { FlatbedCarComponent } from './pages/carriers/flatbed-car/flatbed-car.component';
import { SpecializedCarComponent } from './pages/carriers/specialized-car/specialized-car.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { GetquoteComponent } from './pages/getquote/getquote.component';
import { DistributionComponent } from './pages/customers/distribution/distribution.component';
import { ManufacturesComponent } from './pages/customers/manufactures/manufactures.component';
import { RecyclersComponent } from './pages/customers/recyclers/recyclers.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'get-quote', component: GetquoteComponent },

      // customers routers
      {
        path: 'customers', children: [
          { path: 'online-car-buyers', component: OnlineCarBuyersComponent },
          { path: 'private-dealers', component: PrivateDealersComponent },
          { path: 'dealerships', component: DealarshipsComponent },
          { path: 'auctions', component: AuctionsComponent },
          { path: 'distribution', component: DistributionComponent },
          { path: 'manufactures', component: ManufacturesComponent },
          { path: 'recyclers', component: RecyclersComponent }
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
