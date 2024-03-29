import { Injectable } from '@angular/core';
declare const gtag: any;
const GOOGLE_ANALYTICS_ID = 'G-LR5PY6915M';
@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {
  gtag: any;
  constructor() {
    if (typeof gtag !== 'undefined') {
      this.gtag = gtag;
    }
  }

  public sendEvent = (
    eventName: string,
    eventCategory: string,
    eventLabel: string | null = null,
    eventValue: number | null = null
  ) => {
    if (!this.gtag) {
      return;
    }
    this.gtag('event', eventName, {
      event_category: eventCategory,
      event_label: eventLabel,
      value: eventValue
    });
  };

  public sendPageView(url: string) {
    if (!this.gtag) {
      return;
    }
    this.gtag('config', GOOGLE_ANALYTICS_ID, { page_path: url });
  }
}
