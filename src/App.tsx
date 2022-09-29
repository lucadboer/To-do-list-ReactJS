import { FormEvent, useState } from 'react'

import { Header } from './components/Header'
import { Input } from './components/Input'
import { Button } from './components/Button'

import styles from './App.module.css'
import './global.css'
import { Task } from './components/Task'
import { NoTask } from './components/NoTask'
import { TaskStatus } from './components/TaskStatus'


function App() {

  return (
    <div>
      <Header />

      <main className={styles.main}>
        <div className={styles.input}>
          <Input />
        </div>
        
      </main>
    </div>
  )
}

export default App
