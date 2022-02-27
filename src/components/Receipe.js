import React from 'react'
import './components.css'


export default function Receipe(props) {
    return (
        <div className='receipeBox'>

            <h3 className='receipetitle'>{props.title}</h3>

            {/* Using unsplash to get random images based on receipe title. Can be taken using api calls with food images */}
            <div className='receipeimage'>
                <div className='altimg'><h4 className='alttext'>{props.title}</h4></div>
                <img className='receipeimg' src={`https://source.unsplash.com/500x200/?${props.title}`} alt={props.ititle} />
            </div>

            <div className='margin3'>
                <h5 >Ingredients used</h5>
                <table >
                    <tr>
                        <th >Ingredient name</th>
                        <th>Quantity</th>

                    </tr>
                    {props.ingredientsUsed.filter(ingredient => ingredient.quantity > 0).map((filteredName) => (
                        <>
                            <tr>
                                <td className='leftshift'>{filteredName.productName}</td>
                                <td className='leftshift'>{filteredName.quantity}</td>
                            </tr>
                        </>
                    ))}

                </table>
            </div>


            <div >
                <h5>Spices used</h5>
                <table >
                    <tr>
                        <th >Spice name</th>
                        <th >Quantity</th>

                    </tr>
                    {props.spicesUsed.filter(spice => spice.quantity > 0).map((filteredName) => (
                        <>
                            <tr>
                                <td className='leftshift'>{filteredName.productName}</td>
                                <td className='leftshift'>{filteredName.quantity}</td>
                            </tr>
                        </>
                    ))}

                </table>
            </div>

        </div>
    )
}
