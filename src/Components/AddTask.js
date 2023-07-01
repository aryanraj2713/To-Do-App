import React from 'react'

export const AddTask = () => {
  return (
    <section className='addTask'>
        <form>
            <input type='text' name='task' autoComplete='off' placeholder='add Task' maxLength={25}/>
            <button type='submitt'>ADD</button>
        </form>    
    </section>
  )
}
