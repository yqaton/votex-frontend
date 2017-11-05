import React from 'react'
import { render } from 'react-dom'

const Hello = () => (
  <div>
    Hello from react
  </div>
)

export default Hello

render(<Hello />, document.getElementById('app'));