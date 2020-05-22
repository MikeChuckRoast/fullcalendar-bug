// Full Calendar
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import listPlugin from '@fullcalendar/list';

// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// App
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { RideCalendarComponent } from './ride-calendar/ride-calendar.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
	dayGridPlugin,
	timeGridPlugin,
	interactionPlugin,
	listPlugin
]);

@NgModule({
	declarations: [
		AppComponent,
		RideCalendarComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		RouterModule,
		AppRoutingModule,
		HttpClientModule,
		FullCalendarModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
