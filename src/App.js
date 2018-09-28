import React, { Component } from 'react';
import logo from './logo.svg';
import './assets/css/App.css';
import { Input, Icon, Modal} from 'antd'
import { Link } from 'react-router-dom'
import { Card } from 'antd';

const { Meta } = Card;

class App extends Component {

  state = {
    books: []
  }

  constructor(props){
    super(props)
    this.getBooks()
  }

  getBooks(){
    fetch("http://localhost:4000/books")
      .then(r => r.json())
      .then(books => {
        this.setState(function(){
          return {
            books: books
          }
        })
      })
  }

  deleteBook(id){
    Modal.confirm({
      title: 'Are you sure delete this task?',
      content: 'Some descriptions',
      onOk: () => {
        fetch(`http://localhost:4000/books/${id}`, {
          method: `DELETE`
        }).then(r => {
          this.getBooks()
        })
      }
    })
  
  } 


  redirectToEdit(id){
    window.location.href=`/editar/${id}`
  }
  
  renderCard(book, key){
    console.log(book, 1)
    return (
      <Card
      key={key}
      hoverable
      style={{ width: 240, float: "left", margin: 15 }}
      actions={[<Icon type="delete" onClick={() => this.deleteBook(book['_id'])} />, 
        <Link to={"/editar/"+book['_id']}><Icon type="edit" /></Link>]}
      >
      <Meta
        title={book.name}
        description={book.category}
      />
    </Card>
    )
  }

  render() {
    return (
      <div>
        <Input onKeyPress={event => this.filterBooks(event)} placeholder="Filtrar livros"/>
        <div>
          {this.state.books.map((book, index) => this.renderCard(book, index))}
        </div>
      </div>
    );
  }

  filterBooks(event){
    if(!event.target.value) return this.getBooks()
    if(event.key != "Enter") return false;
    let valor = event.target.value.toLowerCase()
    let books = this.state.books.filter((book) => {
      return book.name.toLowerCase().includes(valor)
    }) 
    this.setState(() => {
      return {
        books: books
      }
    })
  }

}

export default App;
