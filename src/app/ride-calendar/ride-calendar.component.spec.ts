/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RideCalendarComponent } from './ride-calendar.component';

describe('RideCalendarComponent', () => {
	let component: RideCalendarComponent;
	let fixture: ComponentFixture<RideCalendarComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [RideCalendarComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RideCalendarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
