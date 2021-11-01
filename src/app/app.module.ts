import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatDividerModule} from "@angular/material/divider";
import { ProfileComponent } from './pages/profile/profile.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatFormFieldModule} from "@angular/material/form-field";
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    ContactComponent,
    GalleryComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatCarouselModule.forRoot(),
    MatSelectModule,
    MatOptionModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
