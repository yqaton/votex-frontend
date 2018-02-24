import { h, render } from 'preact'
import Button from 'preact-material-components/Button';
import 'preact-material-components/Button/style.css';

const Hello = () => (
  <div>
    Hello from react
    <Button>
      default
    </Button>
  </div>
)

export default Hello

render(<Hello />, document.getElementById('app'));