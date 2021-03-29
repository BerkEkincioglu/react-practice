import React, { Fragment } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Header from './components/Header';
import Search from './components/Search';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={() => <Accordion items={items} />} />
          <Route
            exact
            path='/dropdown'
            component={() => <Dropdown options={options} />}
          />
          <Route exact path='/list' component={Search} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
