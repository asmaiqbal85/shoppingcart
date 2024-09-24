import React from 'react'
import { Shop } from './shop'
import Cart from './cart'
import CartProvider from './cartProvider'

function Home() {
  return (
    <div>
      <h1 className=' flex justify-center mt-10 mb-4 text-[32px] font-bold text-black/80 fpnt-bold'>Contaxt Api</h1>
      <h1 className='flex justify-center text-[24px] font-bold text-black/80 fpnt-bold'>Cart functionality</h1>
      <CartProvider>
      < Shop/>
      <div className='mb-10 mt-10'></div>
      <hr />
      <Cart/>
      </CartProvider>
    </div>
  )
}

export default Home