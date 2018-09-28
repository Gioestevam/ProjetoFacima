import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import 'antd/dist/antd.css'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Panel from './Panel'

ReactDOM.render((
    <Router>
        <Switch>
            <Route  path="/" render={() => <Panel />} />
            <Route  path="**" render={() => <div>404</div>} />
        </Switch>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
