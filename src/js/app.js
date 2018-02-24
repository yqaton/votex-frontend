import { h, render, Component } from 'preact'
import Button from './Components/button'

const Hello = () => (
  <div>
    <p>Это голосование за самых веселых импровизаторов!!!</p>
    <p>Какая команда смешнее?</p>
    <div>
      <Button name='Команда 1' action={ e => alert("Вы проголосовали за команду 1!") }/>
      <Button name='Команда 2' action={ e => alert("Вы проголосовали за команду 2!") }/>
    </div>
  </div>
)

render(<Hello />, document.getElementById('votexApp'));