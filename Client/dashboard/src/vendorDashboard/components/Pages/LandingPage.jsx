import React,{useState} from 'react'
import NavBar from '../NavBar'
import SideBar from '../SideBar'
import Login from '../Forms/Login'
import Register from '../Forms/Register'
import AddFirm from '../Forms/AddFirm'
import AddProduct from '../Forms/AddProduct'
import Welcome from '../../Welcome'


const LandingPage = () => {
  const [showLogin,setShowLogin]=useState(false)
  const [showRegister,setShowRegister]=useState(false)
  const [showAddFirm,setShowAddFirm]=useState(false)
  const [showAddProduct,setShowAddProduct]=useState(false)
  const [showWelcome,setShowWelcome]=useState(false)

  const showLoginHandler=()=>{
    setShowLogin(true)
    setShowRegister(false)
    setShowAddFirm(false)
    setShowAddProduct(false)
    setShowWelcome(false)
  }
  const showRegisterHandler=()=>{
    setShowRegister(true)
    setShowLogin(false)
    setShowAddFirm(false)
    setShowAddProduct(false)
    setShowWelcome(false)
  }
  const showAddFirmHandler=()=>{
    setShowAddFirm(true)
    setShowAddProduct(false)
     setShowLogin(false)
    setShowRegister(false)
    setShowWelcome(false)
  }
  const showAddProductHandler=()=>{
    setShowAddProduct(true)
    setShowAddFirm(false)
    setShowLogin(false)
    setShowRegister(false)
    setShowWelcome(false)
  }
  const showWelcomeHandler=()=>{
    setShowWelcome(true)
    setShowAddProduct(false)
    setShowAddFirm(false)
    setShowLogin(false)
    setShowRegister(false)
  }

  return (
    <>
      <section className="landingSection">
        <NavBar showLoginHandler={showLoginHandler} showRegisterHandler={showRegisterHandler}/>
        <div className="collectionSection">
          <SideBar showAddFirmHandler={showAddFirmHandler} showAddProductHandler={showAddProductHandler}/>
         {showLogin && <Login showWelcomeHandler={showWelcomeHandler}/>}
          {showRegister && <Register  showLoginHandler={showLoginHandler}/>}
          {showAddFirm && <AddFirm/>}
          {showAddProduct && <AddProduct/>}
          {showWelcome && <Welcome/>}
        </div>
        
      </section>
    </>
  )
}

export default LandingPage
