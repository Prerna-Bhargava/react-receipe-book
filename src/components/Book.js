import React from 'react'
import './components.css'


export default function book(props) {
    // Increase Ingredients count on clicking '+' Button
    const increase = index => e => {
        let newArr = [...props.products];
        newArr[index].quantity = Number(e.target.value) + 1;
        props.set(newArr);
    }
    // Decrease Ingredients count on clicking '-' Button
    const decrease = index => e => {
        let newArr = [...props.products];
        newArr[index].quantity = Number(e.target.value) - 1;
        props.set(newArr);
    }
    // Increasing the step number on clicking Next Button to easily manage components to render
    const changestep = ()=>{
        props.changeStep(
            String(Number(props.step)+ 1)
        )
    }
    // Set Receipe name 
    const settitle=(e)=>{
        props.settitle(e.target.value.slice(0,1).toUpperCase() + e.target.value.slice(1) ) 
    }
    return (
        <div className='bookcomponent'>
            <h3 className='title' >Receipe book</h3>
            <input type='text' value={props.title}  onClick={()=>props.settitle('')}  onChange={settitle} />

            <div className='productBox'>
                
                <div className='display' >
                <p  className='margin-left'>{props.name}</p> 
                <p  className='margin-left'>Quantity</p> 
                </div>

                {props.products.filter(product => product.quantity > 0).map((filteredName) => (
                    <div key={filteredName.key} className='display'>
                        <p  className='productname'>{filteredName.productName}</p>
                        <p  >
                            <button className='Countbtn' value={filteredName.quantity} onClick={decrease(filteredName.key -1)}>-</button>
                            {filteredName.quantity}
                            <button className='Countbtn' value={filteredName.quantity} onClick={increase(filteredName.key -1)}>+</button></p>
                    </div>
                ))}

            </div>
            <button className='nextStep' value={props.step} onClick={changestep}>Next</button>
        </div>
    )
}
