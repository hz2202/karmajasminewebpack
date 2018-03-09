import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from 'react-dom/test-utils'; // ES6
import { calendarapp, EventTime } from "../src/gsb_calendarEh.js"; 
import * as cal from "../src/gsb_calendarEh.js"; 
import renderer from 'react-test-renderer';
//ReactDOM.render(<CalendarApp />,  document.getElementById("gsb_rcalendar"));

describe("React calendar", function() {
  beforeAll(function () {
        ReactDOM.render(React.createElement("div", {
           className: "test"
        }), document.getElementsByTagName('body')[0]);
  });
  
  it('can render without error', function() {
    //let TestUtils = React.addons;
 
    // let renderer = TestUtils.createRenderer();
    //renderer.render(<EventTime time = "time" />); 
    const div = document.createElement('div');
     ReactDOM.render(<EventTime />, div);
    let component = ReactTestUtils.renderIntoDocument(
        React.createElement(EventTime, {time: "tesdt"})
    );
    var childComponents = ReactTestUtils.scryRenderedComponentsWithType(component, 'time');
     //                   let component = renderer.getRenderOutput();
    //let component = ReactTestUtils.renderIntoDocument(
    //    <EventTime time = "time" />
    //);
    //let shallow = ReactTestUtils.createRenderer();
    //let shallow = new ShallowRenderer();
   // shallow.render(React.createElement(EventTime, {time: "tesdt"}));
    //let component = shallow.getRenderOutput();
    console.log(childComponents);
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
