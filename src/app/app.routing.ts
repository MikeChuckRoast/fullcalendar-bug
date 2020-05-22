import { RideCalendarComponent } from './ride-calendar/ride-calendar.component';

import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	{
		path: '',
		redirectTo: 'calendar',
		pathMatch: 'full'
	},
	{
		path: 'calendar',
		component: RideCalendarComponent
	},
];

@NgModule({
	imports: [
		CommonModule,
		BrowserModule,
		RouterModule.forRoot(routes, {
			useHash: false
		})
	],
	exports: [
	],
})
export class AppRoutingModule { }
