import { useState } from 'react';
import './App.css'
import { Card } from './components/card/card';
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './components/create-modal/create-modal';

function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handalOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className="container">
      <h1>Cardápio</h1>
        {isModalOpen && <CreateModal closeModal={handalOpenModal} />}
        <button onClick={handalOpenModal} className="btn-primary">Novo item</button>
      <div className='card-grid'>
        {data?.map((foodData, index) => 
          <Card 
          key={index}
          price={foodData.price} 
          title={foodData.title} 
          image={foodData.image} 
          />
        )}
      </div>
    </div>
  )
}

export default App
