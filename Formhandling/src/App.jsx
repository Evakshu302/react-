import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [task, setTask] = useState([])

  const submithandler = (e) => {
    e.preventDefault()

    setTask([
      ...task,
      {
        title: title,
        detail: detail,
      },
    ])

    setTitle('')
    setDetail('')
  }

  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row">

      {/* Left Side */}
      <div className="w-full lg:w-1/2 bg-black flex justify-center pt-20">
        <form
          onSubmit={submithandler}
          className="flex flex-col gap-5 w-[80%] max-w-[500px]"
        >
          <input
            type="text"
            placeholder="Enter Notes Heading"
            className="border-2 border-white p-3 rounded-md bg-transparent text-white"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            rows={7}
            placeholder="Write Details"
            className="border-2 border-white p-3 rounded-md bg-transparent text-white resize-none"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          />

          <button
            type="submit"
            className="bg-white text-black py-3 rounded-md font-semibold"
          >
            Add Note
          </button>
        </form>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 bg-slate-900 p-10">
        <h1 className="text-3xl font-bold text-white mb-8">
          Your Notes
        </h1>

        <div className="flex flex-wrap gap-6">

          {task.map((elem, idx) => (
            <div
              key={idx}
              className="h-52 w-40 bg-white rounded-3xl p-4 overflow-auto"
            >
              <h2 className="font-bold text-lg text-black mb-2">
                {elem.title}
              </h2>

              <p className="text-black">
                {elem.detail}
              </p>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default App
/* import React from 'react'
import { useState } from 'react'

const App = () => {
  const [name, setName] = useState('')
  const submithandler = (e) => {
    e.preventDefault()
    console.log("form submitted")
    console.log(name)
  }
  return (
    <div>
      <form onSubmit={(e) => {
        submithandler(e)
      }}>
        <input type="text" placeholder='Enter your name'
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
 */