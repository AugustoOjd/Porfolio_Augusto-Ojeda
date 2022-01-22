import React from 'react'

import {Link} from 'react-router-dom'

const Item = ({ id, modelo, precio, img, marca, title}) => {


    return (


        <>
            <div  className='flex bg-green-300 h-full w-64 shadow p-0.5 mx-2 rounded dark:bg-gray-700'>
                
                <div className='flex flex-wrap content-end items-center bg-white dark:bg-gray-100 h-full w-full shadow p-2 rounded'>

                    <img src={img} alt={`${id}-${title}`} className='h-52 w-full rounded' />
                    <p className='text-lg  my-0.5 mx-10 hidden' >{id}-</p>
                    <h2 className='text-2xl font-semibold my-0.5 mx-10'>{modelo}</h2>
                    <h3 className='text-xl  my-0.5 mx-10'> {(new Intl.NumberFormat("es-AR", {style: "currency", currency: "ARS"}).format(precio))}</h3>
                    <h3 className='hidden'>{marca}</h3>
                    <Link to={`/productos/${id}`} className='flex justify-center items-center bg-blue-300 hover:bg-green-600 rounded shadow w-full h-12 text-xl font-bold my-0.5 mx-10'>Detalle</Link>

                </div>
                
            </div>
        </>
    )
}

export default Item
