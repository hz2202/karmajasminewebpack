import React from "react";
import ReactDOM from "react-dom";
import { calendarapp, EventTime, Eventrow, EventRsvp } from "../src/gsb_calendarEh.js"; 
import TestRenderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
//ReactDOM.render(<CalendarApp />,  document.getElementById("gsb_rcalendar"));

describe("React calendar", function() {
  beforeAll(function () {
        ReactDOM.render(React.createElement("div", {
           className: "test"
        }), document.getElementsByTagName('body')[0]);
  });
  it('can Shallow render without error', function() {
    const today = new Date();
    let event= {
      date: today.getDate(),
    };
    const renderer = new ShallowRenderer();
    renderer.render(<EventTime time = { event.date }/>);
    const result = renderer.getRenderOutput();
    console.log(result.prop);
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
    console.log(testRenderer.toJSON());
    expect(testInstance.findByType(EventRsvp).props.rspv).toBe('test rsvp');
   });
});
describe("Event Calendar", function() { 
  it("get events from feed", function() {
    expect(calendarapp.getEvents).not.toBeNull();
  });  
});
