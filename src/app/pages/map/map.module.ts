import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import { AngularOpenlayersModule } from 'ngx-openlayers';

@NgModule({
  declarations: [MapComponent],
  imports: [CommonModule, MapRoutingModule, AngularOpenlayersModule],
})
export class MapModule {}
