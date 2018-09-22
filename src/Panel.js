import React, { Component } from 'react'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import FormApi from './form'
import { Layout, Menu, Icon } from 'antd';

const { Header, Sider, Content } = Layout;

class Panel extends Component {
    render() {
        return (
            <Layout style={{ height: "100vh" }}>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={false}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>

                        <Menu.Item key="1">
                            <Link to="/">
                                <Icon type="dashboard" />
                                <span>Livros</span>
                            </Link>
                        </Menu.Item>


                        <Menu.Item key="2">
                            <Link to="/cadastro">
                                <Icon type="plus" />
                                <span>Cadastrar</span>
                            </Link>
                        </Menu.Item>

                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            style={{ marginLeft: 15 }}
                            className="trigger"
                            type={false ? 'menu-unfold' : 'menu-fold'}
                        />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', float: "left" }}>

                                <Route exact path="/" render={() => <App />} />
                                <Route exact path="/cadastro" render={(props) => <FormApi url={props}/>} />
                                <Route exact path="/editar/:id" render={(props) => <FormApi url={props} url_props={props} />} />
                                {/* <Route path="**" render={() => <div>404</div>} /> */}

                    </Content>
                </Layout>
            </Layout>
        )
    }
}


export default Panel