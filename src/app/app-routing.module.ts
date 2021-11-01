import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {GalleryComponent} from "./pages/gallery/gallery.component";
import {Home1Component} from "./pages/home1/home1.component";

const routes: Routes = [
  {path: "wer", component: HomeComponent,
    children: [
      {path:"profile",component:ProfileComponent},
      {path: "contact", component: ContactComponent},
      {path: "gallery", component: GalleryComponent},
    ]
  },
  {path: "**", redirectTo: "wer"},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


