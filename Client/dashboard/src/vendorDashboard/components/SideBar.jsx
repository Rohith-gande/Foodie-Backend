import React from 'react'

const SideBar = ({showAddFirmHandler,showAddProductHandler}) => {
  return (
    <div className="sideBarSection">
        <ul>
            <li onClick={showAddFirmHandler}>Add Firm</li>
            <li onClick={showAddProductHandler}>Add Product</li>
            <li>All Products</li>
            <li>User Details</li>
        </ul>
    </div>
  )
}

export default SideBar
