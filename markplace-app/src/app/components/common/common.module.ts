import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialCommonModule } from '../../material/material.module';
import { ScrollContentTrackerComponent } from './scroll-content-tracker/scroll-content-tracker.component';
import { CategoryItemListComponent } from './category-item-list/category-item-list.component';
import { TableComponent } from './table/table.component';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  imports: [CommonModule, MaterialCommonModule, FlexLayoutModule],
  exports: [HeaderComponent, ScrollContentTrackerComponent, CategoryItemListComponent, TableComponent],
  declarations: [HeaderComponent, ScrollContentTrackerComponent, CategoryItemListComponent, TableComponent],
})
export class CommonComponentModule {}
