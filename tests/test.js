import React from "react";
import ReactDOM from "react-dom";
import { calendarapp, EventTime } from "../src/gsb_calendarEh.js"; 
import * as cal from "../src/gsb_calendarEh.js"; 
import ShallowRenderer from 'react-test-renderer/shallow';
//ReactDOM.render(<CalendarApp />,  document.getElementById("gsb_rcalendar"));

describe("React calendar", function() {
  beforeAll(function () {
        ReactDOM.render(React.createElement("div", {
           className: "test"
        }), document.getElementsByTagName('body')[0]);
  });
  
  it('can render without error', function() {
    const renderer = new ShallowRenderer();
    renderer.render(<EventTime time = "test"/>);
    const result = renderer.getRenderOutput();
 
    expect(result.type).toBe('time');
    //expect(result.props.children).toEqual([
    //  <span className="heading">Title</span>,
    //  <Subcomponent foo="bar" />
    //]);
    //console.log(childComponents);
    //let h1 = ReactTestUtils.findRenderedDOMComponentWithTag(
    //   component, 'time'
    //);
    //expect(component).toExist(); 
  });
});

describe("Event Calendar", function() { 
  it("get events from feed", function() {
    expect(calendarapp.getEvents).not.toBeNull();
  });
  it("normalized data", function () {
        // Invoke the unit being tested as necessary
        var json = '{"Name": "Maria", "PersonalIdentifier": 2111858}';
        var norm = calendarapp.normalizeData(json);

        // Check the results; "expect" and toEqual are Jasmine methods.
        expect(norm.name).toEqual("Maria");
        expect(norm.id).toEqual(2111858);
    });
  
});
