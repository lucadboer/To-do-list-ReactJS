import { Trash } from 'phosphor-react'
import { ChangeEvent, useState } from 'react'

import styles from './Task.module.css'

export interface TaskProps {
  content: string
  onDeleteTask: (task: string) => void
}

export function Task( { content, onDeleteTask }:TaskProps ) {

  const [check, setCheck] = useState(false)

  function handleDeleteTask() {
    onDeleteTask(content)
  }

  function handleChecked(event: ChangeEvent<HTMLInputElement>) {
    setCheck(event.target.checked)
    console.log(check);
    
  }

  return (
    <div className={styles.task}>

      <div className={styles.taskContent}>
        <input 
          type="checkbox" 
          name="checkBoxTask" 
          id='check'
          checked = {check}
          onChange = {handleChecked} 
          />
        <p>{content}</p>
      </div>

      <button title='Deletar Tarefa' onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
    </div>
  )
}