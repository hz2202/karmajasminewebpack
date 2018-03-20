import React from "react";
import ReactDOM from "react-dom";
import { RCalendarApp, calendarapp, EventTime, Eventrow, EventRsvp, EventPage, NoEvents } from "../src/gsb_calendarEh.js"; 
import TestRenderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow'; 
//ReactDOM.render(<CalendarApp />,  document.getElementById("gsb_rcalendar"));

describe("React calendar", function() {
  it('can Shallow render without error', function() {
    const today = new Date();
    let event= {
      date: today.getDate(),
      year: '2018',
      month: 'March'
    };
    const renderer = new ShallowRenderer();
    renderer.render(<EventTime time = { event.date } year = {event.year} month = { event.month}/>);
    const result = renderer.getRenderOutput();
    expect(result.type).toBe('time');
  });
  it('can test render without error', function() {
    const today = new Date();
    let event= {
      date: today.getDate(),
      description: "test event",
      External_RSVP: "test rsvp"
    };
    const testRenderer = TestRenderer.create(<Eventrow event = { event }/>);
    const testInstance = testRenderer.root;
    expect(testInstance.findByType(EventRsvp).props.rspv).toBe('test rsvp');
   });
});
describe("Render events", function(){
  it('can display initial loader', function() {
    const today = new Date();
    let event= {
      date: today.getDate(),
      description: "test event",
      External_RSVP: "test rsvp"
    };
    let status = null;   
    const testRenderer = TestRenderer.create(<EventPage event = { event } status = { status }/>);
    const testInstance = testRenderer.root;
    expect(testInstance.findByType(NoEvents).props.status).toBe('Searching for events');
    
   });
  it('can display when no event is found', function() {
    const today = new Date();
    let event= {
      date: today.getDate(),
      description: "test event",
      External_RSVP: "test rsvp"
    };
    let status = 0;
    const testRenderer = TestRenderer.create(<EventPage event = { event } status = { status }/>);
    const testInstance = testRenderer.root;
    expect(testInstance.findByType(NoEvents).props.status).toBe('No events were found');
    
   });
  it('can display events', function() {
    const today = new Date();
    let event= {
      date: today.getDate(),
      description: "test event",
      External_RSVP: "test rsvp" 
    };
    let status = 0;
    
    const testRenderer = TestRenderer.create(<EventPage event = { event } status = { status }/>);
    const testInstance = testRenderer.root;
    expect(testInstance.findByType(NoEvents).props.status).toBe('No events were found');
    
   });

  
});
describe("Event Calendar API", function() { 
  it("get events from feed", function() {
    let filters = {
      org_id:'116201, 116202, 116203, 116259, 116204, 116261, 116205, 116206, 116199, 116207'
    };
    calendarapp.getEvents(filters).then((d) => {
      expect(d.status).toBeDefined();
    }).catch((e) => {
      expect(e).toBeNull();
    });
  });
  it("can filter array", function() {
    const data = [
      {name: "this is a test"},
      {name: "this morning"},
      {name: "The test failed"} 
    ];
    const key = 'name';
    const value = 'this';
    const results = [
      {name: "this is a test"},
      {name: "this morning"}
    ];
    expect(calendarapp.searchEvents(data,key,value)).toEqual(results);
  });
});
