import React, { Component } from 'react'
import App from './App';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import FormApi from './components/forms/form'
import Categoria from './components/categoria/ListCategoriaComponent';
import { Layout, Menu, Icon } from 'antd';
import { Button } from 'antd/lib/radio';
import './assets/css/Panel.css';

const { Header, Sider, Content } = Layout;

const SubMenu = Menu.SubMenu;

class Panel extends Component {

    state = {
        collapsed: false
    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <Layout style={{ height: "100vh" }}>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed= {this.state.collapsed}>

                    <div className="logo">
                        <Icon type="dashboard" theme="twoTone" twoToneColor="#808a94" style={{fontSize: "25px" }}/>
                    </div>

                    <Menu theme="dark" mode="inline" inlineCollapsed={this.state.collapsed}>
                        <SubMenu key="sub1" title={<span><Icon type="book"/><span>livros</span></span>}>
                            <Menu.Item key="1">
                                <Link to="/livros">
                                    <Icon type="dashboard" />
                                    <span>Lista de livros</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/cadastro">
                                    <Icon type="plus" />
                                    <span>Cadastrar livros</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <Link to="/categoria">
                                    <Icon type="plus"/>
                                    <span>Categoria</span>
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>

                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                    <Button shape="circle" onClick={this.toggleCollapsed} style={{ marginLeft: 15 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        />
                    </Button>
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', float: "left" }}>

                                <Route exact path="/livros" render={() => <App />} />
                                <Route exact path="/categoria" render={() => <Categoria />} />
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