import React, {Component} from 'react'
import TodoForm from './TodoForm'
import axios from 'axios'

const initialState = {
  taskName: '',
  assignee:''
}

export default class UpdateTodo extends Component {
  constructor() {
    super()
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
    evt.preventDefault()
    const todoId = this.props.todoId
    try{
      const res = await axios.put(`/api/todos/${todoId}`, this.state)
      this.props.updateTodo(res.data)
      this.setState({
        initialState
      })
      console.log(res.data)
    } catch(error) {
      console.log(error)
    }

  }

  render () {
    return (
      <TodoForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        {...this.state}
        />
    )
  }
}
