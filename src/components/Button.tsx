import { ButtonHTMLAttributes } from 'react'
import { PlusCircle } from 'phosphor-react'
import styles from './Button.module.css'

export function Button() {
  return (
    <div>
      <button  
        className={styles.button}
        type='submit'
        >
        Criar <PlusCircle size={24} />
      </button>
    </div>
  )
}