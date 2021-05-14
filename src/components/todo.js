import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import Container from "react-bootstrap/Container"

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { todos:[] , isloaded:false, error:null}
    }
    
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
            this.setState({
                todos: result,
                isloaded: true
            });
        },
        (error) => {
            this.setState({
           isloaded: false,
           error
            });
        }
        )
    }
    
    render() {  
        const { error, isLoaded, todos } = this.state;
        return ( 
            <Container fluid>
            <Table responsive="sm" className="table-striped table-bordered table-hover">
            {
           todos.map(todo => (
            <tr>
               <td>{todo.id}</td>
               <td>{todo.title}</td>
               <td>{todo.completed===true? `true` : 'false'}</td>
               </tr>
               ))}        
        </Table>
        </Container>
        );
    }
}
 
export default Todo;