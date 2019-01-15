import React, {Component} from 'react'
import axios from 'axios'

export default class CreateTodo extends Component {

  constructor(props){
    super(props)
    this.state = {
      taskName:'',
      assignee: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  async handleSubmit(evt){
    try{
      evt.preventDefault()
      const res = await axios.post('/api/todos', this.state)
      this.props.addTodo(res.data)
      this.setState({
        taskName: '',
        assignee: ''
      })
    } catch (error) {
        console.log(error)
    }
  }

  render () {
    const {taskName, assignee} = this.state

    return (
      <form onSubmit={this.handleSubmit}>

        <label htmlFor='taskName'>Task Name:</label>
        <input  type='text'
                name='taskName'
                placeholder='Task Name'
                value={taskName}
                onChange={this.handleChange}
                ></input>

        <label htmlFor='assignee'>Assignee:</label>
        <input  type='text'
                name='assignee'
                placeholder='Assigned to...'
                value={assignee}
                onChange={this.handleChange}
                ></input>

        <button type='submit'>Submit</button>
      </form>
    )
  }
}
