import React, { useState, useEffect } from 'react'
import styles from '@/styles/card.module.css'
// import data from '@/data/Card.json'

export default function Card() {
  const [pic, setPic] = useState(0)
  const getPic = () => {
    const getRandom = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
    const url = getRandom(1, 48)
    setPic(url)
  }
  // getPic() {
  //   // alert('A name was submitted: ' + this.state.value);
  //   x = random
  //   pic = json.get(x)

  //   this.setState({ url: pic.url, text: pic.text })
  // }

  return (
    <>
      <div className={styles['card']}>
        <img className={styles['pic']} src={`images/${pic}.jpg`} />
        {/* <h2 value={text}>這是卡片對應的文字</h2> */}
      </div>{' '}
      <br />
      <div>
        <button className={styles.button} type="button" onClick={getPic}>
          點我抽卡
        </button>
      </div>
    </>
  )
}
