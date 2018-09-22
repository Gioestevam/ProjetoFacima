import React, { Component } from 'react';
import { Form, Input, Button, Select, message } from "antd"
class FormApi extends Component {
    state = {
        form: {
            name: "",
            image: "",
            category: ""
        },
        valores: [
            {label: "Ficção", value: "Ficção"}
        ]
    }
    constructor(props){
        super(props)

        console.log(props)
        if(this.props.hasOwnProperty('url_props')){
            this.getById(this.props.url_props.match.params.id)
        }
    }

    getById(id){
        fetch(`http://localhost:4000/books/${id}`)
            .then(r => r.json())
            .then(book => {
                this.setState({
                    form: {
                        ...book[0]
                    }
                })
            })
    }

    render() {
        return (<div>
               <Form onSubmit={(event) => this.saveBook(event)}>
                   <h2>Fomulário de cadastro</h2>
                   <Form.Item>
                       <Input value={this.state.form.name} required onChange={event => this.updateValue('name', event.target.value)} placeholder="Nome do livro"/>
                   </Form.Item>
                   <Form.Item>
                       <Input value={this.state.form.image} required onChange={event => this.updateValue('image', event.target.value)} placeholder="Imagem"/>
                   </Form.Item>
                   <Form.Item>
                       <Select value={this.state.form.category} onChange={valor => this.updateValue('category', valor)}>
                            <Select.Option value="">Selecione...</Select.Option>
                           {this.state.valores.map((item, index) => {
                               return <Select.Option key={index} value={item.value}>{item.label}</Select.Option>
                           })}
                       </Select>
                   </Form.Item>
                   <Form.Item>
                       <Button  type="primary" htmlType="submit">Salvar</Button>
                   </Form.Item>
               </Form>
        </div>)
    }

    updateValue(attr, value){
        this.setState(function(){
            return {
                form: {
                    ...this.state.form,
                    [attr]: value
                }
            }
        })
    }


    saveBook(event){
        event.preventDefault()
        let id = this.props.hasOwnProperty('url_props') ? this.props.url_props.match.params.id : ""
        fetch(`http://localhost:4000/books/${id}`, {
            method: (this.props.hasOwnProperty('url_props') ? "PUT" : "POST"),
            body: JSON.stringify(this.state.form),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(resposta => {
            message.success("Livro salvo com sucesso.")
            this.props.url.history.push(`/`)
        })
    }
}

export default FormApi