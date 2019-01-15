import React, {Component} from 'react'

export default class CreateTodo extends Component {
  render () {
    return (
      <form>

        <label htmlFor='taskName'>Task Name:</label>
        <input type='text' name='taskName' placeholder='Task Name'></input>

        <label htmlFor='assignee'>Assignee:</label>
        <input type='text' name='assignee' placeholder='Assigned to...'></input>

        <button type='submit'>Submit</button>
      </form>
    )
  }
}
