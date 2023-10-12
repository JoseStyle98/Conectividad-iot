import React from 'react'
import Card from './Card'
import image1 from '../assets/cama.jpg'
import image2 from '../assets/honda.jpg'
import image3 from '../assets/toyota.jpg'

const cards = [
    {
        id: 1,
        title: 'cama',
        image: image1,
        desc: "Lugar de Descanso"
    },
    {
        id: 2,
        title: 'honda',
        image: image2,
        desc: 'Carro de Confianza'
    },
    {
        id: 3,
        title: 'toyota',
        image: image3,
        desc: 'Carro de Trabajo'

    }
]

export default function Cards() {
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
        <div className='row'>
            {
                cards.map(c => (
                    <div className='col-md-4' key={c.id}>
                        <Card
                        key={c.id}
                        id={c.id}
                        title={c.title}
                        image={c.image}
                        desc={c.desc}
                        />
                    </div>
                ))
            }
        </div>
    </div>
  )
}