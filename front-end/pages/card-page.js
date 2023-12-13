import React from 'react'
import Card from '@/components/card/card'
import styles from '@/styles/card.module.css'

export default function CardPage() {
  return (
    <>
      <div className={styles['container']}>
        <Card />
      </div>
    </>
  )
}
