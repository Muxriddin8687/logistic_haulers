import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation, inject, signal } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { CarModel } from 'src/app/core/models/car.model';
import { CarsService } from 'src/app/core/services/cars.service';
import { MessageService } from 'src/app/core/services/message.service';

@Component({
  selector: 'app-getquote',
  templateUrl: './getquote.component.html',
  styleUrls: ['./getquote.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class GetquoteComponent implements OnInit {

  private smsService = inject(MessageService);
  private _http = inject(HttpClient);
  private _carService = inject(CarsService);

  defult = {
    country: '.',
    state: '.',
    city: 'Loading...',
  };

  searchResultFrom: any = signal(this.defult);
  searchResultTo: any = signal(this.defult);

  car: Observable<CarModel[]> = new Observable<CarModel[]>();
  model: Observable<any> = new Observable();
  type: Observable<any> = new Observable();


  ngOnInit() {
    this.load();
  }


  load() {
    this.car = this._carService.getCars();
    this.model = this._carService.getModels();

    console.log(this.car);

  }


  send(form: NgForm) {

    let data = "Meassage from get a quote page" +
      "\nFrom: " + form.value.from +
      "\nTo: " + form.value.to +
      "\nYear: " + form.value.year +
      "\nMake: " + form.value.make +
      "\nModel: " + form.value.model +
      "\nTruck: " + form.value.truck +
      "\nDriver: " + form.value.driver +
      "\nDate: " + form.value.date +
      "\nName: " + form.value.name +
      "\nPhone: " + form.value.phone +
      "\nEmail: " + form.value.email;

    data = encodeURI(data);



    this.smsService.sendEmail('Auto Quote Form', data).subscribe(
      (res) => {
        if (res.success == true) {
          this.smsService.sendSms(data, 'asddd').subscribe();
          Swal.fire('Thank you', 'Your message has been sent successfully and we will contact you shortly.', 'success');
          form.onReset();
        } else
          Swal.fire('Error', 'Please try again', 'warning');
      },
      (err) => console.log(err.message)
    );
  }

  findCityByZipCodeFrom(zip_code: string) {
    this._http.get('https://ziptasticapi.com/' + zip_code).subscribe(
      (res: any) => {
        if (res.error) this.searchResultFrom.set(this.defult);
        else this.searchResultFrom.set(res);
      },
      (err) => { }
    );
  }

  findCityByZipCodeTo(zip_code: string) {
    this._http.get('https://ziptasticapi.com/' + zip_code).subscribe(
      (res: any) => {
        if (res.error) this.searchResultTo.set(this.defult);
        else this.searchResultTo.set(res);
      },
      (err) => { }
    );
  }
}
