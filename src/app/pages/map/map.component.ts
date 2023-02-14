import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  // マップ設定
  mapOptions = {
    lat: 35.681,
    lng: 139.767,
    zoom: 11,
    rotation: 0,
    srid: 'EPSG:4326',
  };

  // 背景地図設定
  tileOptions = {
    url: 'https://tile.mierune.co.jp/mierune_mono/{z}/{x}/{y}.png',
    tileSize: 256,
    minZoom: 0,
    maxZoom: 18,
  };
}
