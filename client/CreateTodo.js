import React, { Component } from 'react'
import axios from 'axios'
import TodoForm from './TodoForm'

const initialState = {
  taskName: '',
  assignee: ''
}
export default class CreateTodo extends Component {

  constructor(props) {
    super(props)
    this.state = {
     initialState
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  async handleSubmit(evt) {
    try {
      evt.preventDefault()
      const res = await axios.post('/api/todos', this.state)
      this.props.addTodo(res.data)
      this.setState({
        initialState
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { taskName, assignee } = this.state

    return (
      <TodoForm handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        {...this.state}
      />
    )
  }
}
