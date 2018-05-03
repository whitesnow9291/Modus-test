import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppContentComponent } from './components/app-content/app-content.component';
import { RouterModule } from '@angular/router';
import { AppService } from './services/app.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [AppHeaderComponent, AppContentComponent],
  exports: [AppHeaderComponent, AppContentComponent],
  providers: [
    AppService
  ]
})
export class CoreModule { }
