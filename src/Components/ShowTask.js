import React from 'react'


export const ShowTask = () => {
  return (
    <section className="showTask">
      <div className="head">
        <span className="title">To Do</span>
        <span className="count">0</span>
      </div>
        <button className="clearAll">Clear All</button>
        <ui>
          <p>
            <span className='name'>Task A</span>
            <span className='time'>Saturday, July 22, 2023, 5:50 PM</span>
          </p>
        </ui>
    </section>
  )
}
