import React from 'react'
import './components.css'

export default function sidebar(props) {

  // increasing ingredient count on clicking side bar components
  const set = index => e => {
    let newArr = [...props.products];
    newArr[index].quantity = Number(e.target.value) + 1;
    props.set(newArr);
  }
  
  return (
    <div className='sidebar'>
      <p className='producttitle'>{props.name}</p>
      {props.products.map((product, index) =>
        <div key={product.key}>
          <button className='sidebarbtn' value={product.quantity} onClick={set(index)}>{product.productName}</button>
        </div>
      )}
    </div>
  )
}
