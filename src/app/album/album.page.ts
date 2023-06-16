import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ActivatedRoute } from '@angular/router';
import albums from '../../assets/mockdata/albums';

import { SharedDirectivesModule } from '../directives/shared-directives.module';

@Component({
  selector: 'app-album',
  templateUrl: './album.page.html',
  styleUrls: ['./album.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, SharedDirectivesModule, NgIf]
})
export class AlbumPage implements OnInit {

  data = null;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const title = this.activatedRoute.snapshot.paramMap.get('title');
    const decodedTitle = decodeURIComponent(title);
    this.data = albums[decodedTitle];
  }
  dasherize(string) {
    return string.replace(/[A-Z]/g, function (char, index) {
      return (index !== 0 ? '-' : '') + char.toLowerCase();
    });
  };
}