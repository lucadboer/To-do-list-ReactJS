import { useState, FormEvent, ChangeEvent } from 'react'
import { Button } from './Button'
import styles from './Input.module.css'
import { NoTask } from './NoTask'
import { Task, TaskProps } from './Task'
import { TaskStatus } from './TaskStatus'


export function Input() {

  const [newContentTask, setNewContentTask] = useState('')

  const [tasks, setTasks] = useState([''])

  function handleNewTask(event:FormEvent) {
    event.preventDefault()
    setTasks([...tasks, newContentTask])
    setNewContentTask('')
  }

  function handleNewContentTask(event: ChangeEvent<HTMLInputElement>) {
    setNewContentTask(event.target.value)
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithOutDelete = tasks.filter(task => {
      return task !== taskToDelete
    })
    setTasks(tasksWithOutDelete)
  }

  return (
    <div>
      <div className={styles.containerInput}>
        <form onSubmit={handleNewTask}>
          <input
            placeholder="Adicione uma nova tarefa"
            type="text"
            value={newContentTask}
            onChange={handleNewContentTask}
            required
            autoFocus
          />
          <Button />
        </form>
      </div>

      <TaskStatus 
        tasksLenght={tasks.length}
      />

      <div className={styles.checkList}>
        {tasks.length === 0 ? <NoTask /> : tasks.map(task => {
          return <Task 
            key={task}
            content={task}
            onDeleteTask={deleteTask}
          />
        })}

        </div>

    </div>
  )
}