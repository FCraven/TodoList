import React, {Component} from 'react'

export default class CreateTodo extends Component {

  constructor(props){
    super(props)
    this.state = {
      taskName:'',
      assignee:{}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt){
    evt.preventDefault()
    console.log(`==+-STATE-->`, this.state)
    this.setState({
      taskName: '',
      assignee: {}
    })
  }

  render () {
    return (
      <form>

        <label htmlFor='taskName'>Task Name:</label>
        <input  type='text'
                name='taskName'
                placeholder='Task Name'
                value={this.state.taskName}
                onChange={this.handleChange}
                ></input>

        <label htmlFor='assignee'>Assignee:</label>
        <input  type='text'
                name='assignee'
                placeholder='Assigned to...'
                value={this.state.assignee}
                onChange={this.handleChange}
                ></input>

        <button type='submit'>Submit</button>
      </form>
    )
  }
}
