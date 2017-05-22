import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Route, HashRouter } from 'react-router-dom'
import App from './components/App'
import './index.css'

ReactDOM.render(
  <HashRouter>
    <Route  path="/" component={App} >
      <Route path="/about" component={AboutPage} />
      <Route path="/members"  component={MembersPage} />
      <Route path="/faqs"  component={FaqPage} />
    </Route>
  </HashRouter>,
  document.getElementById('root') as HTMLElement
);
