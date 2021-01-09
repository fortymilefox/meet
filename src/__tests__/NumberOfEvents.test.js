import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('render textbox element', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
  });

  test('render number of events input', () => {
    expect(NumberOfEventsWrapper.find('.numberInput')).toHaveLength(1);
  });

  test('checks default value for number of events', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents input').prop('value')).toBe(32);
  });

  test('checks value change of number of events', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents input').simulate('change', {target: {value : 12}}))
  });

});