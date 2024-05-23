import React from 'react'
import { useSelector } from 'react-redux'



const Checkout = () => {

  const [FirstName, setFirstName] = React.useState("")
  const [LastName, setLastName] = React.useState("")
  const [Adress, setAdress] = React.useState("")
  const [City, setCity] = React.useState("")
  const [code, setCode] = React.useState("")
  const [Number, setNumber] = React.useState("")
  const [state, setState] = React.useState("")
  const [email, setEmail] = React.useState("")

const {addToCart} = useSelector((state)=>state.addToCartReducer)
// console.log(addToCart);
  const placeOrder = async() => {
    let userData = {
      FirstName, LastName, Adress, City,code, Number,state,email
    }
  if (!FirstName || !LastName || !Adress || !City || !code || !Number || !state || !email) {
    alert("please complete the full form");
  }else{
    console.log(userData);
    alert("Your order has been placed....")
  }
  }
let subTotal = 0;
  return (
    <div>
    <div className="py-4">
      <div className="container">
        <section className="row">
          <div className="col-md-7">
          <div className="card">
            <div className="card-header">
              <h4>BasicInformation</h4>
            </div>
            <div className="card-body">
              <section className="row">
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label >First Name</label>
                    <input type="text" onChange={(e)=>setFirstName(e.target.value)} name="firstName" className='form-control' />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label >Last Name</label>
                    <input type="text" onChange={(e)=>setLastName(e.target.value)} name="lastName" className='form-control' />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label >Phone Number</label>
                    <input type="Number" onChange={(e)=>setNumber(e.target.value)} name="phone Number" className='form-control' />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <label >Email Address</label>
                    <input type="email" onChange={(e)=>setEmail(e.target.value)} name="email" className='form-control' />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group mb-3">
                    <label >Full Address</label>
                    <textarea rows={3} onChange={(e)=>setAdress(e.target.value)} className='form-control'></textarea>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label >City</label>
                    <input type="text" onChange={(e)=>setCity(e.target.value)} name="city" className='form-control' />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label >State</label>
                    <input type="text" onChange={(e)=>setState(e.target.value)} name="firstName" className='form-control' />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group mb-3">
                    <label >Zip Code</label>
                    <input type="Number" onChange={(e)=>setCode(e.target.value)} name="firstName" className='form-control' />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group text-end">
                    <button type='button'  className='btn btn-outline-dark' onClick={placeOrder}>Place Order</button>
                  </div>
                </div>
              </section>
            </div>
          </div>

         


          </div>
          <div className='col-md-5'>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Products</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
            </tr>
          </thead>

    <tbody>
      {
        addToCart.map((product,index)=>{
          subTotal += product.price * product.count
          return <tr key={index}>
        <td>{product.title}</td>
        <td>{product.price}</td>
        <td>{product.count}</td>
        <td>{product.price * product.count}$</td>
      </tr>
        })
      }
      <tr>
        <td colSpan={2} className='text-end fw-bold'>SubTotal</td>
        <td colSpan={2} className='fw-bold'>{subTotal}</td>
      </tr>
    </tbody>

        </table>
          </div>
        </section>
      </div>
    </div>

    </div>
  )
}

export default Checkout
