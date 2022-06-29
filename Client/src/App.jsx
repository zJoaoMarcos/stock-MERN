import { useState, useEffect } from 'react';
import Axios from 'axios';
import { Form } from '@unform/web'
import Input from './Components/Form/Input'

function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/read').then((response) => {
      setItems(response.data)
    })
  }, []);

  const handleRegister = async (data) => {

    const itemName = data.name;
    const itemType = data.type;

    await Axios.post("http://localhost:3001/insert",
      {
        itemName: itemName,
        itemType: itemType,
      }
    );
  };

  return (
    <div className="App">
      <h1> Register in Stock</h1>

      <Form onSubmit={handleRegister}>
        <Input name="name" type="text" required placeholder="Nome do item" />
        <Input name="type" type="text" required placeholder="Tipo" />

        <button type="submit">Cadastrar</button>
      </Form>

      <h2> Stock List</h2>

      {items.map((val, key) => {
        return (
          <div key={key}>
            <h1> Item:{val.itemName} </h1>
            <h1> Type:{val.itemType} </h1>
          </div>
        );
      })}
    </div>
  )
};

export default App
