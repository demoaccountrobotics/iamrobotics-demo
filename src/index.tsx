import ReactDOM from 'react-dom';
import App from './components/App';
import Header from './components/Header';

ReactDOM.render(
  // TODO: Pull main into it's own component
  <main style={{width: '900px', margin: '1em auto'}}>
    <Header />
    <App />
  </main>,document.getElementById('root')
);