import React, { Fragment } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';

const items = [
  {
    title: 'What is React',
    content: 'React is a front end javascripts framework',
  },
  {
    title: 'Why use React',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How do you use React',
    content: 'You use React by creating components',
  },
];

const options = [
  {
    label: 'The color red',
    value: 'red',
  },
  {
    label: 'The color green',
    value: 'green',
  },
  {
    label: 'The color blue',
    value: 'blue',
  },
  {
    label: 'The color yellow',
    value: 'yellow',
  },
  {
    label: 'The color grey',
    value: 'grey',
  },
  {
    label: 'The color orange',
    value: 'orange',
  },
];

const App = () => {
  return (
    <Fragment>
      <Dropdown options={options} />
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
    </Fragment>
  );
};

export default App;
