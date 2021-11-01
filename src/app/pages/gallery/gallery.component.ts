import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  slides = [
    {'image': 'assets/download'},
    {'image': 'assets/download (1)'},
    {'image': 'assets/download (2)'},
    {'image': 'assets/images'},
    {'image': 'assets/download'}
  ];
  constructor() { }
  ngOnInit(): void {
  }

}
