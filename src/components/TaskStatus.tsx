import styles from './TaskStatus.module.css'

interface TasksStatusProps {
  tasksLenght: number
}

export function TaskStatus({ tasksLenght }:TasksStatusProps) {

  return (
  <div className={styles.headerCheckList}>
  <div className={styles.createdHeaderCheck}>
    <h3>Tarefas criadas</h3>
    <span>{tasksLenght}</span>
  </div>

  <div className={styles.sucessHeaderCheck}>
    <h3>Concluídas</h3>
    <span>0 de {tasksLenght}</span>
  </div>
</div>
  )
}