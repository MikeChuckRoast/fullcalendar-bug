import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking

@Component({
	selector: 'app-ride-calendar',
	templateUrl: './ride-calendar.component.html',
	styleUrls: ['./ride-calendar.component.scss']
})
export class RideCalendarComponent implements OnInit {

	events: any[];
	calendarVisible = true;
	calendarOptions: CalendarOptions = {
		headerToolbar: {
			left: 'prev,next today',
			center: 'title',
			right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
		},
		initialView: 'timeGridWeek',
		//initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
		weekends: true,
		editable: true,
		selectable: true,
		selectMirror: true,
		dayMaxEvents: true,
		/*
		select: this.handleDateSelect.bind(this),
		eventClick: this.handleEventClick.bind(this),
		eventsSet: this.handleEvents.bind(this)
		*/
		/* you can update a remote database when these fire:
		eventAdd:
		eventChange:
		eventRemove:
		*/
	};

	constructor() { }

	ngOnInit() {

	}
}
