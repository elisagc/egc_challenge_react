import React from 'react'

import './sass/main.scss'
import Home from './containers/Home'
import { Route, Switch } from 'react-router-dom'
const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  )
}

export default App
