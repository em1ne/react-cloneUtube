import React, { useContext } from 'react'
import { categories } from '../utils/constans'
import { Context } from '../context/contextApi'

const LeftNav = () => {
    //contex yapısında sağlanan state ve fonksiyonlara abone olma
    const { selectedCategory, setSelectedCategory } = useContext(Context)

    return (

        < div className='bg-black text-light d-flex flex-column gap-4' >
            {
                categories.map((item, index) => (
                    <>
                        <div key={index} className={`p-1 ${selectedCategory === item.name && "bg-secondary rounded"}`}
                            style={{ cursor: 'pointer', }}
                            onClick={() => setSelectedCategory(item.name,)}>
                            <span>{item.icon}</span>
                            <span className='mx-2'>{item.name}</span>
                        </div>
                        {item.divider && <hr className='my-3' />}
                    </>
                ))
            }
        </div >
    )
}

export default LeftNav