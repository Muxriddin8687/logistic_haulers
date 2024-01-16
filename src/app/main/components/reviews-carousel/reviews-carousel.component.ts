import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
declare let Swiper: any;

@Component({
  selector: 'app-reviews-carousel',
  templateUrl: './reviews-carousel.component.html',
  styleUrls: ['./reviews-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ReviewsCarouselComponent {
  ngAfterViewInit() {
    let swipes = new Swiper('.reviews-swiper-three-cards', {
      slidesPerGroup: 1,
      loop: !1,
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination.reviews-pagination",
        dynamicBullets: !0
      },
      navigation: {
        nextEl: ".review-next",
        prevEl: ".review-prev"
      },
      breakpoints: {
        768: {
          spaceBetween: 20,
          slidesPerGroup: 1,
          slidesPerView: 2
        },
        991: {
          slidesPerGroup: 3,
          slidesPerView: 3,
          spaceBetween: 20,
          pagination: !1
        }
      }
    });
  }
}
