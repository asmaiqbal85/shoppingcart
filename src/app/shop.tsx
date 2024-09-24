"use client"

import React,{useContext} from 'react'
import { CartContext } from './context';

export const Shop = () => {
    const obj = useContext(CartContext)
    console.log(obj)
    const arr = [
        {name:"tops",id:1},
        {name:"paints",id:2},
        {name:"T shirts",id:3},
    ]
  return (
    <div className='ml-10'>
        <h1 className='text-left ml-10 mb-4'>Shopping</h1>
            <ol>
                {
                    arr.map((val,i)=>{
                        return(
                            <li key={i}>
                                <span className='mr-5 '>{val.id}</span>{val.name}{" "}
                                <span
                                 className='ml-5 '
                                onClick={()=>obj.add({name:val.name,id:val.id})}
                                >
                                    add to cart
                                    </span>
                                    </li>
                        );
                    })
                }
            </ol>
      
    </div>
  );
};
export default Shop
