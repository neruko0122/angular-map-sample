import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

import { PagesRoutingModule } from './pages-routing.module';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';
import { HeaderComponent } from './shared/header/header.component';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [SideMenuComponent, HeaderComponent, PagesComponent],
  imports: [CommonModule, PagesRoutingModule, MatToolbarModule, MatListModule],
})
export class PagesModule {}
