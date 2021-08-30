import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CalendarOptions } from '@fullcalendar/common';
import { getCurrencySymbol } from '@angular/common';
import { Calendar } from '@fullcalendar/angular';
import { DayGridView } from '@fullcalendar/daygrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  Events: any = [
    {
      start: '2021-08-25',
      title: 'Link to: Google',
      color: 'orange',
      url: 'https://www.google.com/',
    },
    {
      start: '2021-08-03',
      end: '2021-08-06',
      title: 'Convention',
      color: 'yellowgreen',
    },

    {
      start: '2021-08-26',
      display: 'background',
      color: 'red',
    },

    {
      start: '2021-08-01',
      display: 'background',
      color: 'grey'
    },
    {
      start: '2021-08-08',
      display: 'background',
      color: 'grey'
    },
    {
      start: '2021-08-15',
      display: 'background',
      color: 'grey'
    },
    {
      start: '2021-08-22',
      display: 'background',
      color: 'grey'
    },
    {
      start: '2021-08-29',
      display: 'background',
      color: 'grey'
    },
    {
      start: '2021-08-10',
      title: 'Interview Google',
      color: 'blue'
    },
    {
      start: '2021-08-10',
      title: 'Planning Meeting',
      color: 'sky'
    },
  ];



  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    weekends: false,
  };



  constructor(private httpClient: HttpClient) {  }

  onDateSelect(arg: any) {
    alert('Date clicked: ' + arg.dateStr)
  }

  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
  }


ngOnInit() {
  setTimeout(() => {
    return this.httpClient.get('http://localhost:4200/dynamic-events.php')
      .subscribe((res: any) => {
        this.Events.push(res);
        console.log(this.Events);
      });
  }, 500);

  setTimeout(() => {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      dateClick: this.onDateSelect.bind(this),
      events: this.Events
    };
  }, 500);
}
}
