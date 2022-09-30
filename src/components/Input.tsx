import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react'
import { Button } from './Button'
import styles from './Input.module.css'
import { NoTask } from './NoTask'
import { Task, TaskProps } from './Task'
import { TaskStatus } from './TaskStatus'


export function Input() {

  const [newContentTask, setNewContentTask] = useState('')

  const [tasks, setTasks] = useState<Array<string>>([])

  const [completedTasks, setCompletedTasks] = useState<Array<string>>([])


  function handleNewTask(event:FormEvent) {
    event.preventDefault()
    setTasks([...tasks, newContentTask])
    setNewContentTask('')
  }

  function handleNewContentTask(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewContentTask(event.target.value)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
		event.target.setCustomValidity('Digite uma tarefa...')
	}

  function deleteTask(taskToDelete: string) {
    const tasksWithOutDelete = tasks.filter(task => {
      return task !== taskToDelete
    })
    setTasks(tasksWithOutDelete)
  }

  function isCompleted(completedTask: string, status: boolean) {
    tasks.map((task) => {
      if (task === completedTask && status === false) {
        setCompletedTasks([...completedTasks, task])
      }
      else {
        const onlyCompletedTasks = completedTasks.filter(task => {
          if (task === completedTask && status === false) {
            return task
          }
          setCompletedTasks(onlyCompletedTasks)
        })
      }
    })
  }

  return (
    <div>
      <div className={styles.containerInput}>
        <form onSubmit={handleNewTask}>
          <input
            className={styles.taskInput}
            placeholder="Adicione uma nova tarefa"
            type="text"
            value={newContentTask}
            onChange={handleNewContentTask}
            required
            onInvalid={handleNewTaskInvalid}
            autoFocus
          />
          <Button />
        </form>
      </div>

      <TaskStatus 
        tasksLenght={tasks.length}
        completedTasks={completedTasks.length}
      />

      <div className={styles.checkList}>
        {tasks.length === 0 ? <NoTask /> : tasks.map(task => {
          return <Task 
            key={task}
            content={task}
            onCompletedTask={isCompleted}
            onDeleteTask={deleteTask}
          />
        })}

        </div>

    </div>
  )
}