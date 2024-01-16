import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, ViewEncapsulation, signal } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { CarModel } from 'src/app/core/models/car.model';
import { CarsService } from 'src/app/core/services/cars.service';
import { MessageService } from 'src/app/core/services/message.service';
import Swal from 'sweetalert2';
declare let $: any;


@Component({
  selector: 'app-main-bar',
  templateUrl: './main-bar.component.html',
  styleUrls: ['./main-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class MainBarComponent {
  @ViewChild('videoRef', { static: true }) videoRef!: ElementRef;
  one: boolean = true;
  two: boolean = false;
  three: boolean = false;
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


  

  constructor(
    private http: HttpClient,
    private carService: CarsService,
    private smsService: MessageService
  ) {
    this.load();
  }




  ngAfterViewInit(): void {
    const media = this.videoRef.nativeElement;
    media.muted = true;
    media.play();
    setInterval(() => {
      media.play()
    }, 2000);
  }



  load() {
    this.car = this.carService.getCars();
    this.model = this.carService.getModels();
    this.type = this.carService.getTypes();
  }

  send(form: NgForm) {
    //   {
    //     "from": "LENOX DALE, MA 1242",
    //     "to": "FLEISCHMANNS, NY 12430",
    //     "date": "2023-07-27T19:00:00.000Z",
    //     "truck": "open",
    //     "first_name": "Nick",
    //     "last_name": "Bernard",
    //     "phone": "930939200",
    //     "email": "admin@gmail.com",
    //     "year": "2022",
    //     "make": "Toyota",
    //     "model": "Land Cruiser",
    //     "type": "SUV"
    // }

    if (form.valid) {
      const chanel_name = 'autoquotedpl';

      let data = 'Auto Quote Form' +
        '\nFirst name:  ' + form.value.first_name +
        '\nLast name:  ' + form.value.last_name +
        '\nPhone:  ' + form.value.phone +
        '\nEmail:  ' + form.value.email +
        '\nFrom:  ' + form.value.from +
        '\nTo:  ' + form.value.to +
        '\nDate:  ' + form.value.date +
        '\nTruck type:  ' + form.value.truck +
        '\nAuto year:  ' + form.value.year +
        '\nAuto make:  ' + form.value.make +
        '\nAuto model:  ' + form.value.model +
        '\nAuto type:  ' + form.value.type;

      data = encodeURI(data);

      this.smsService.sendEmail('Auto Quote Form', data).subscribe(
        (res) => {
          if (res.success == true) {
            this.smsService.sendSms(data, chanel_name).subscribe();
            Swal.fire('Thank you', 'Your message has been sent successfully and we will contact you shortly.', 'success');
            form.onReset();
          } else
            Swal.fire('Error', 'Please try again', 'warning');
        },
        (err) => console.log(err.message)
      );
    }
  }



  findCityByZipCodeFrom(zip_code: string) {
    this.http.get('https://ziptasticapi.com/' + zip_code).subscribe(
      (res: any) => {
        if (res.error) this.searchResultFrom.set(this.defult);
        else this.searchResultFrom.set(res);
      },
      (err) => { }
    );
  }

  findCityByZipCodeTo(zip_code: string) {
    this.http.get('https://ziptasticapi.com/' + zip_code).subscribe(
      (res: any) => {
        if (res.error) this.searchResultTo.set(this.defult);
        else this.searchResultTo.set(res);
      },
      (err) => { }
    );
  }
}
