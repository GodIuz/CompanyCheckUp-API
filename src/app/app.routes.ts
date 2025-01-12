  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { RouterModule, Routes } from '@angular/router';
  import { AppComponent } from './app.component';
  import { NavbarComponent } from './navbar/navbar.component';
  import { HomeComponent } from './home/home.component';
  import { AboutComponent } from './about/about.component';
  import { PricingComponent } from './pricing/pricing.component';
  import { AppsComponent } from './apps/apps.component';
import { AndroidComponent } from './apps/android/android.component';
import { IosComponent } from './apps/ios/ios.component';
import { HarmonyosComponent } from './apps/harmonyos/harmonyos.component';
import { FooterComponent } from 'footer/footer.component';
import { DisclaimerComponent } from 'disclaimer/disclaimer.component';
import { PrivacyComponent } from 'privacy/privacy.component';
import { TermsComponent } from 'terms/terms.component';
import { CookiePolicyComponent } from 'cookie-policy/cookie-policy.component';

  export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'apps', component:  AppsComponent},
    { path: 'apps/android', component:AndroidComponent},
    { path: 'apps/ios', component: IosComponent },
    { path: 'apps/harmonyos', component: HarmonyosComponent},
    { path: 'pricing', component: PricingComponent },
    { path: 'about', component: AboutComponent },
    { path: 'terms', component: TermsComponent },
    { path: 'privacy', component: PrivacyComponent },
    { path: 'disclaimer', component: DisclaimerComponent },
    { path: 'cookie-policy', component: CookiePolicyComponent}
  ];

  @NgModule({
    declarations: [
      HomeComponent,
      AboutComponent,
      PricingComponent,
      TermsComponent,
      PrivacyComponent,
      DisclaimerComponent,
      CookiePolicyComponent,
    ],
    imports: [
      AppComponent,
      NavbarComponent,
      FooterComponent,
      BrowserModule,
      RouterModule.forRoot(routes)
    ],
    bootstrap: []
  })
  export class AppModule { }