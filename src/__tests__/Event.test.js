import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('<Event /> component', () => {
  let EventWrapper,event;
  beforeAll(() => {
    event = {
      "kind": "calendar#event",
      "etag": "\"3181159875584000\"",
      "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",
      "status": "confirmed",
      "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
      "created": "2020-05-19T19:14:30.000Z",
      "updated": "2020-05-27T11:45:37.792Z",
      "summary": "React is Fun",
      "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
      "location": "Berlin, Germany",
      "creator": {
       "email": "fullstackwebdev@careerfoundry.com",
       "self": true
      },
      "organizer": {
       "email": "fullstackwebdev@careerfoundry.com",
       "self": true
      },
      "start": {
       "dateTime": "2020-05-20T14:00:00+02:00",
       "timeZone": "Europe/Berlin"
      },
      "end": {
       "dateTime": "2020-05-20T15:00:00+02:00",
       "timeZone": "Europe/Berlin"
      },
      "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
      "originalStartTime": {
       "dateTime": "2020-05-20T14:00:00+02:00",
       "timeZone": "Europe/Berlin"
      },
      "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
      "sequence": 0,
      "reminders": {
       "useDefault": true
      }
    }
    EventWrapper = shallow(<Event event={event}/>);
  });

  test('event wrapper is rendered', () => {
    expect(EventWrapper.find(".Event")).toHaveLength(1);
  });
  
  test('event wrapper contains event overview', () => {
    expect(EventWrapper.find(".Event").children()).toHaveLength(1);
  });

  test('eventOverview is rendered', () => {
    expect(EventWrapper.find(".eventOverview")).toHaveLength(1);
  });

  test('children of eventOverview are rendered', () => {
    expect(EventWrapper.find(".eventOverview").children()).toHaveLength(3);
  });

  test('button to show or hide details is rendered', () => {
    expect(EventWrapper.find(".detail-btn")).toHaveLength(1);
  });

  test('button should show details of event when clicked', () => {
    EventWrapper.setState({revealDetails: false});
    EventWrapper.find(".eventOverview button").simulate('click'),
    expect(EventWrapper.state("revealDetails")).toBe(true);
  });
})