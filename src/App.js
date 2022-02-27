import './App.css';
import { useState } from 'react';

import Sidebar from './components/Sidebar';
import Book from './components/Book';
import Receipe from './components/Receipe';


function App() {
  const [step, changestep] = useState('1')
  const [title,settitle]=useState('Name of receipe')
  const [ingredients, setingredients] = useState([
    {
      productName: 'Paneer',
      quantity: 0,
      key: 1
    },
    {
      productName: 'Sausage',
      quantity: 0,
      key: 2

    },
    {
      productName: 'Bread',
      quantity: 0,
      key: 3

    },
    {
      productName: 'Spice',
      quantity: 0,
      key: 4

    },
    {
      productName: 'Sugar',
      quantity: 0,
      key: 5
    }
  ])
  const [spices, setspices] = useState([
    {
      productName: 'Pepper',
      quantity: 0,
      key: 1

    },
    {
      productName: 'Candamon',
      quantity: 0,
      key: 2

    },
    {
      productName: 'Clove',
      quantity: 0,
      key: 3

    },
    {
      productName: 'Nutmeg',
      quantity: 0,
      key: 4

    }
  ])
  return (
    <>
      {step != '3' && <Sidebar products={step === '1' ? ingredients : spices} set={step === '1' ? setingredients : setspices} name={step === '1' ? 'Ingredients' : 'Spices'}/>}
      {step != '3' && <Book products={step === '1' ? ingredients : spices} set={step === '1' ? setingredients : setspices} name={step === '1' ? 'Ingredients' : 'Spices'} step ={step} changeStep={changestep} title={title} settitle={settitle}/>}
      {step=='3'&& <Receipe title={title} ingredientsUsed={ingredients} spicesUsed={spices} /> }
    </>
  );
}

export default App; 
