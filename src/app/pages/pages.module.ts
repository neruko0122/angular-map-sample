import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';
import { HeaderComponent } from './shared/header/header.component';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [SideMenuComponent, HeaderComponent, PagesComponent],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
