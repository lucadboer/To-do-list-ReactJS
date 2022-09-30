import { Trash } from 'phosphor-react'
import { ChangeEvent, MouseEventHandler, useState } from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { Button } from './Button'

import styles from './Task.module.css'

export interface TaskProps {
  content: string
  onCompletedTask: (task: string) => void
  onDeleteTask: (task: string) => void
}

export function Task( { content, onDeleteTask, onCompletedTask }:TaskProps ) {
  const [isCompleted, setIsCompleted] = useState(false)


  function handleDeleteTask() {
    onDeleteTask(content)
  }


  function handleCompletedTask() {
    setIsCompleted(isCompleted ? false : true)
    onCompletedTask(content)   
  }


  return (
    <div className={isCompleted ? styles.taskOff : styles.taskOn}>

      <div className={styles.taskContent}>
        <button className={styles.checkedContainer} onClick={handleCompletedTask}>
          {isCompleted ? <BsFillCheckCircleFill /> : <div />}
        </button>
          
        <p>{content}</p>
      </div>

      <button className={styles.deleteButton} title='Deletar Tarefa' onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
    </div>
  )
}