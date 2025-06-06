import React from 'react';
import Card from './card';
import './App.css'

function App() {
  return (
    <>
      <h1 className='bg-green-300 text-black rounded-2xl mb-4'>TailWind CSS </h1>
      <Card text='Changed using props' />
      <br />
      <Card text='Available YaY' />
    </>
  )
}

export default App
