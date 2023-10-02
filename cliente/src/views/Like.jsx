import React, { useContext, useEffect } from 'react'
import { DataContext } from '../context/DataContext'
import CardsLiked from '../components/CardsLiked';
import './style.scss';


const Like = () => {

  const { favoritos, getFavoritos } = useContext(DataContext);

  

  useEffect(() => {
    getFavoritos()
  }, [favoritos])


  return (
    <div style={{textAlign: 'center', margin: '2rem'}}> <h1>Tus favoritos</h1>
    <div className="like-container">

      {favoritos.map((ele) => {
        return (
          <CardsLiked key={ele.id} data={ele} />
        )
      })}
    </div></div>
  )
}

export default Like