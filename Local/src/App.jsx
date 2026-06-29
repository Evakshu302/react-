import React, { useState } from 'react'
import axios from "axios";

const App = () => {
  const [data, setData] = useState([])
  async function getdata() {
    const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
  }
  return (
    <div>
      <button onClick={getdata}>get Data</button>
      <div>
        {data.map(function (elem, idx) {
          return <h3> HELLO,{elem.author}</h3>
        })}
      </div>
    </div>
  )
}

export default App
// import React from 'react'

// const App = () => {
//   const user = {
//     name: 'Evakshu',
//     age: 18,
//     place: 'Dhampur'
//   }
//   localStorage.setItem('user', JSON.stringify(user))
//   const users=JSON.parse(localStorage.getItem('user'))
//   console.log(users)
//   return (
//     <div>App</div>
//   )
// }

// export default App