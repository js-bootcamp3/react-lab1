import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';

function App() {
  const title = 'My best React lab 1';
  const names = ['Esen', 'Almaz', 'Aidar', 'Uluk', 'Erkin', 'Talgat'];

  const handleOk = () => {
    alert('ok clicked')
  }

  const handleCancel = () => {
    alert('Cancel clicked')
  }

  return (
    <div className="container">
      <h1 className="title">{title}</h1>
      <Button color='#5ff57d' onClick={handleOk}>Ok</Button>
      <Button onClick={handleCancel}>Cancel</Button>

      <ul className="names-wrapper">
        {names.map(name => {
          return (
            <li className="name">{name}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
