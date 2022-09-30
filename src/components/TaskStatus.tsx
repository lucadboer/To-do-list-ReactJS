import styles from './TaskStatus.module.css'

interface TasksStatusProps {
  tasksLenght: number
  completedTasks: number
}

export function TaskStatus({ tasksLenght, completedTasks }:TasksStatusProps) {

  return (
  <div className={styles.headerCheckList}>
  <div className={styles.createdHeaderCheck}>
    <h3>Tarefas criadas</h3>
    <span>{tasksLenght}</span>
  </div>

  <div className={styles.sucessHeaderCheck}>
    <h3>Concluídas</h3>
    <span>{completedTasks} de {tasksLenght}</span>
  </div>
</div>
  )
}