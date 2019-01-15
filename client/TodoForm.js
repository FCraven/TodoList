import React from 'react'

const TodoForm = (props) => {
  const {handleChange, handleSubmit, taskName, assignee } = props
  return (
    <form onSubmit={handleSubmit}>

<label htmlFor='taskName'>Task Name:</label>
<input  type='text'
        name='taskName'
        placeholder='Task Name'
        value={taskName}
        onChange={handleChange}
        />

<label htmlFor='assignee'>Assignee:</label>
<input  type='text'
        name='assignee'
        placeholder='Assigned to...'
        value={assignee}
        onChange={handleChange}
        />

<button type='submit'>Submit</button>
</form>
  )
}

export default TodoForm
