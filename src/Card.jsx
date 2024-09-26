import React from 'react'

const data = [
  {image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1hem9ufGVufDB8fDB8fHww', name: 'Amazon', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'},
  {image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWNvbW1lcmNlfGVufDB8fDB8fHww', name: 'Flipkart', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'},
  {image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmV0YWlsfGVufDB8fDB8fHww', name: 'Reliance', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'},
  {image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D', name: 'Myntra', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'},
  {image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D', name: 'Zomato', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'},
  {image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D', name: 'Swiggy', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'},
  {image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGF4aXxlbnwwfHwwfHx8MA%3D%3D', name: 'Ola', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'},
  {image: 'https://images.unsplash.com/photo-1549194898-60fd030ecc0f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dWJlcnxlbnwwfHwwfHx8MA%3D%3D', name: 'Uber', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'},
  {image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGF5bWVudHxlbnwwfHwwfHx8MA%3D%3D', name: 'Paytm', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'},
  {image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25saW5lJTIwc2hvcHBpbmd8ZW58MHx8MHx8fDA%3D', name: 'Snapdeal', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'},
  {image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvY2VyeXxlbnwwfHwwfHx8MA%3D%3D', name: 'BigBasket', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'},
  {image: 'https://images.unsplash.com/photo-1543168256-418811576931?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvY2VyeSUyMGRlbGl2ZXJ5fGVufDB8fDB8fHww', name: 'Grofers', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'},
]

const Card = () => {
  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center gap-5'> 
      {data.map((item, index) => (
        <div key={index} className='w-52 bg-zinc-900 rounded-md overflow-hidden flex flex-col'>
          <div className='w-full h-32 bg-green-300'>
            <img className='w-full h-full object-cover' src={item.image} alt={item.name} />
          </div>
          <div className='w-full text-center px-2 py-2'>
            <h1 className='text-xl font-bold text-green-300'>{item.name}</h1>
            <p className='text-white text-sm'>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card