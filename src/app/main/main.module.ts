import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSelectSearchModule } from 'mat-select-search';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

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
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsCarouselComponent } from './components/news-carousel/news-carousel.component';
import { MainBarComponent } from './components/main-bar/main-bar.component';
import { FixedButtonsComponent } from './components/fixed-buttons/fixed-buttons.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { BreadCrumbsComponent } from './components/bread-crumbs/bread-crumbs.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { SearchPipe } from '../core/pipes/search.pipe';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    NewsCarouselComponent,
    MainBarComponent,
    FixedButtonsComponent,
    SectionTitleComponent,
    BreadCrumbsComponent,
    OnlineCarBuyersComponent,
    PrivateDealersComponent,
    DealarshipsComponent,
    AuctionsComponent,
    OpenCarComponent,
    EnclosedCarComponent,
    FlatbedCarComponent,
    SpecializedCarComponent,
    AboutUsComponent,
    ContactUsComponent,
  ],
  imports: [
    MainRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SearchPipe,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSelectSearchModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ]
})
export class MainModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
