import { useState } from 'react'
import './App.css'
import Form from './componets/Form'
import Card from './componets/Card'

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (name === '' || email === '') {
      setShowError(true);
    } else {
      setShowError(false);
    }
  };

  return (
    <div>
      <Form handleSubmit={handleSubmit} />
      {showError && <p>Error: Debes completar todos los campos</p>}
      {!showError && <Card name={name} email={email} />}
    </div>
  );
};

export default App;