import React from 'react';
import {create, renderer} from 'react-test-renderer';
import App from './App';

jest.useFakeTimers();
jest.runAllTimers();

const snap=create(<App/>);
test('render properly', ()=>{
    expect(snap).toMatchSnapshot();
});

