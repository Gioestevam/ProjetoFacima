import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FormApi from './form'
import { Layout, Menu, Icon } from 'antd';
import Panel from './Panel'
const { Header, Sider, Content } = Layout;

ReactDOM.render((
    <Router>
        <Switch>
            <Route  path="/" render={() => <Panel />} />
            <Route  path="**" render={() => <div>404</div>} />
        </Switch>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
