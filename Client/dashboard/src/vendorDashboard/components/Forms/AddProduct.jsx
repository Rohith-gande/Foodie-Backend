import React from 'react'

const AddProduct = () => {
  return (
    <div className="firmSection">
       <form className="tableForm">
            <h2>Add Product</h2>
            <label>Product Name</label>
            <input type="text" placeholder="Enter Firm Name" required/>
            <label>Price</label>
            <input type="text" placeholder="Enter Area" required/>
            <div className="checkInp">
              <label >Category</label>
              <div className="inputsContainer">
                <div className="checkBoxContainer">
                <label>Veg</label>
                <input type="checkbox" value="veg" />
                </div>
              <div className="checkBoxContainer">
                <label>Non-Veg</label>
                <input type="checkbox" value="non-veg" />
              </div>
              </div>
            </div>
            <label>Image</label>
            <input type="file"/>
            <div className="checkInp">
              <label >Best Seller</label>
              <div className="inputsContainer">
                <div className="checkBoxContainer">
                <label>Yes</label>
                <input type="checkbox" value="yes" />
                </div>
              <div className="checkBoxContainer">
                <label>No</label>
                <input type="checkbox" value="no" />
              </div>
              </div>
            </div>
            <label>Description</label>
            <input type="text" />
            <br />
           <div className="btnSubmit">
            <button>submit</button>
        </div>
       </form>
    </div>
  )
}

export default AddProduct
