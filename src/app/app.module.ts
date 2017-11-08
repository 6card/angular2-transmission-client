import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from	"@angular/router";

import { AppComponent } from './app.component';
import { TransmissionComponent } from './components/transmission.component';
import { RutrackerComponent } from './components/rutracker.component';

import { TransmissionService } from './shared/transmission.service';

import { FileSizePipe } from './pipes/file-size.pipe';
import { FileSpeedPipe } from './pipes/file-speed.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterTorrentsPipe } from './pipes/filter.pipe';

const	routes:	Routes	=	[
  { path:	'',	redirectTo:	'transmission',	pathMatch:	'full'} ,
  { path:	'transmission',	component:	TransmissionComponent },
  { path:	'rutracker',	component:	RutrackerComponent },
  { path:	'**',	redirectTo:	'transmission',	pathMatch:	'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    TransmissionComponent,
    RutrackerComponent,

    FileSizePipe,
    FileSpeedPipe,
    OrderByPipe,
    FilterTorrentsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {useHash: false})
  ],
  providers: [TransmissionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
