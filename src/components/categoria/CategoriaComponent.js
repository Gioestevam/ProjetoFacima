import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Form, Input, Button, Select, message, Table, Divider, Icon } from "antd"
import { Row, Col } from 'antd';
import '../../assets/css/global.css';

const columns = [{
    title: 'Categoria',
    dataIndex: 'Categoria',
    key: 'category'
}, {
    title: 'Ação',
    key: 'action',
    render: (text, record) => (
        <span>
            <a href="javascript:;"><Icon type="edit"/></a>
            <Divider type="vertical" />
            <a href="javascript:;"><Icon type="delete"/></a>
        </span>
    ),
}];

class Categoria extends Component {

    state = {
        dataSource: []
    }

    constructor(props){
        super(props)
        this.getCategory()
    }

    getCategory() {
        fetch('http://localhost:4000/category')
            .then(res => res.json())
            .then(categorys => {
                console.log(categorys)
                this.setState(() => {
                    return {
                        dataSource: categorys
                    }
                })
            })
            
    }

    render() {
        return (
            <div>
                <div>
                    <Row>
                        <Col span={12}>
                            <h4>Lista de Categoria</h4>
                        </Col>
                        <Col span={12}>
                            <Button style={{ float: "right", marginBottom: "20px" }}>
                                Cadatrar Categoria
                            </Button>
                        </Col>
                    </Row>
                </div>

                <Table columns={columns} dataSource={this.state.dataSource}/>
            </div>
            
        )
    }
}

export default Categoria;