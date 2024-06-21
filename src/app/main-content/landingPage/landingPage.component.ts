import { Component } from '@angular/core'; //voreingespeichert bei Angular. Anstat ../ (für Pfade) ist hier @ ausreichend//
import { NavbarComponent } from './navbar/navbar.component';

//dekorator - funktion die um class nochmal ausgeführt wird typescript typisch//
@Component({
  selector: 'app-landingPage', //um es in anderen htmls aufzurufen//
  standalone: true,
  imports: [NavbarComponent],
  template: `<section>
    <app-navbar></app-navbar>
    <div class="headline-ct">
      <h1 class="fontRaleway">SAKURA RAMEN</h1>
      <h2 class="fontRaleway">BEST RAMEN IN TOWN</h2>
    </div>
  </section> `,
  styleUrls: ['landingPage.component.scss'],
})
export class LandingPageComponent {}
