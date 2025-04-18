import React,{useState} from 'react'
import {API_URL} from '../data/ApiPath'
import { ThreeCircles } from 'react-loader-spinner';

// const AddFirm = () => {
//   const [firmName,setFirmName]=useState('')
//   const [area,setArea]=useState('')
//   const [category,setCategory]=useState([])
//   const [region,setRegion]=useState([])
//   const [offer,setOffer]=useState('')
//   const [file,setFile]=useState(null)

//   const handleCategoryChange=(e)=>{
//     const value=e.target.value;
//     if(category.includes(value))
//       setCategory(category.filter((cat)=>cat!==value))
//     else
//       {
//         setCategory([...category,value])
//       }
//   }
//     const handleRegionChange=(e)=>{
//     const value=e.target.value;
//     if(region.includes(value))
//       setRegion(region.filter((cat)=>cat!==value))
//     else
//       {
//         setRegion([...region,value])
//       }
//   }
//    const handleImageUpload=(e)=>{
//     const selectedImage=e.target.files[0]
//     if(selectedImage){
//       setFile(selectedImage)
//     }
//     else{
//       setFile(null)
//     }
//    }

//   const handleFirmSubmit= async(e)=>{
//     e.preventDefault()
//     try {
//        const loginToken=localStorage.getItem('token')
//        if(!loginToken){
//         console.error("user not logged in")
//       }
//         const formData=new FormData()
//         formData.append('firmName',firmName)
//         formData.append('area',area)
//         formData.append('offer',offer)

//         category.forEach((cat)=>{
//           formData.append('category',cat)
//         })
//         region.forEach((reg)=>{
//           formData.append('region',reg)
//         })
//         const response=await fetch(`${API_URL}/firm/add-Firm`,{
//           method:'POST',
//           headers:{
//             'token':`${loginToken}`
//           },
//           body:formData
//         })
//         if(response.ok){
//           const data=await response.json()
//           console.log(data)
//           setFirmName('')
//           setArea('')
//           setCategory([])
//           setRegion([])
//           setOffer('')
//           alert('Firm added successfully')
//         }
//     } catch (error) {
//       console.error("Error in adding firm",error)
//       alert('Failed to add firm')
      
//     }
//   }

//   return (
//     <div className="firmSection">
//        <form className="tableForm" onSubmit={handleFirmSubmit}>
//             <h2>Add Firm</h2>
//             <label>Firm Name</label>
//             <input type="text" name='firmName' value={firmName} onChange={(e)=>setFirmName(e.target.value)}/>
//             <label>Area</label>
//             <input type="text" name='area' value={area} onChange={(e)=>setArea(e.target.value)}/>
//             {/* <label>Category</label>
//             <input type="text" placeholder="Enter " required/> */}
//             <div className="checkInp">
//               <label >Category</label>
//               <div className="inputsContainer">
//                 <div className="checkBoxContainer">
//                 <label>Veg</label>
//                 <input type="checkbox" checked={category.includes('veg')} onChange={handleCategoryChange} value="veg" />
//                 </div>
//               <div className="checkBoxContainer">
//                 <label>Non-Veg</label>
//                 <input type="checkbox" checked={category.includes('non-veg')} onChange={handleCategoryChange} value="non-veg" />
//               </div>
//               </div>
//             </div>


//             {/* <label>Region</label>
//             <input type="text" placeholder="Enter Area" required/> */}
//             <div className="checkInp">
//               <label >Region</label>
//               <div className="inputsContainer">
//                 <div className="regionBoxContainer">
//                 <label>South-Indian</label>
//                 <input type="checkbox" checked={region.includes('south-indian')} onChange={handleRegionChange} value="south-indian" />
//                 </div>
//               <div className="regionBoxContainer">
//                 <label>North-Indian</label>
//                 <input type="checkbox" checked={region.includes('north-indian')} onChange={handleRegionChange} value="north-indian" />
//               </div>
//               <div className="regionBoxContainer">
//                 <label>Chinese</label>
//                 <input type="checkbox" checked={region.includes('chinese')} onChange={handleRegionChange} value="chinese" />
//               </div>
//               <div className="regionBoxContainer">
//                 <label>Bakery</label>
//                 <input type="checkbox" checked={region.includes('bakery')} onChange={handleRegionChange}value="bakery" />
//               </div>
//               </div>
//             </div>
//             <label>Offer</label>
//             <input type="text" name='offer' value={offer} onChange={(e)=>setOffer(e.target.value)}/>
//             <label>Firm Image</label>
//             <input type="file" onChange={handleImageUpload} />
//             <br />
//            <div className="btnSubmit">
//             <button type='submit'>Submit</button>
//         </div>
//        </form>
//     </div>
//   )
// }

// export default AddFirm

const AddFirm = () => {
  const [firmName, setFirmName] = useState("");
  const [area, setArea] = useState("");
  const [category, setCategory] = useState([]);
  const [region, setRegion] = useState([]);
  const [offer, setOffer] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false); 


  const handleCategoryChange = (event)=>{
      const value = event.target.value;
        if(category.includes(value)){
          setCategory(category.filter((item)=> item !== value));
        }else{
          setCategory([...category, value])
        }
  }
  const handleRegionChange = (event)=>{
      const value = event.target.value;
        if(region.includes(value)){
          setRegion(region.filter((item)=> item !== value));
        }else{
          setRegion([...region, value])
        }
  }
 
  const handleImageUpload =(event)=>{
      const selectedImage = event.target.files[0];
      setFile(selectedImage)
  }

  const handleFirmSubmit= async(e)=>{
        e.preventDefault();
    setLoading(true); 

   try {
        const loginToken = localStorage.getItem('token');
        if(!loginToken){
            console.error("User not authenticated");
        }

        const formData = new FormData();
          formData.append('firmName', firmName);
          formData.append('area', area);
          formData.append('offer', offer);
          formData.append('image', file)

          category.forEach((value)=>{
            formData.append('category', value)
          });
          region.forEach((value)=>{
            formData.append('region', value)
          })

          const response = await fetch(`${API_URL}/firm/add-firm`,{
            method:'POST',
            headers:{
              Authorization: `Bearer ${loginToken}`
            },
            body: formData
          });
          const data = await response.json()
          if(response.ok){
            console.log(data);
            setFirmName("");
            setArea("")
            setCategory([]);
            setRegion([]);
            setOffer("");
            setFile(null)
            alert("Firm added Successfully")
          }else if(data.message === "vendor can have only one firm"){
              alert("Firm Exists 🥗. Only 1 firm can be added  ")
          } else{
            console.log("Error response:", data);

              alert('Failed to add Firm')
          }

               const mango = data.firmId;
          const vendorRestuarant = data.vendorFirmName

          localStorage.setItem('firmId', mango);
          localStorage.setItem('firmName', vendorRestuarant)
          window.location.reload()

   } catch (error) {
      console.error("failed to add Firm1")
      alert("failed to add Firm1")
   } finally {
    setLoading(false); 
  }  
  }


  return (
        <div className="firmSection">
   {loading &&        <div className="loaderSection">
        <ThreeCircles
          visible={loading}
          height={100}
          width={100}
          color="#4fa94d"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>}
         {!loading &&   <form className="tableForm" onSubmit={handleFirmSubmit}>
            <h3>Add Firm</h3>
                <label >Firm Name</label>
                <input type="text" name='firmName' value={firmName} onChange={(e)=>setFirmName(e.target.value)}/>
                <label >Area</label>
                <input type="text"  name='area' value={area} onChange={(e)=>setArea(e.target.value)} />
                {/* <label >Category</label>
                <input type="text"  /> */}
    <div className="checkInp">
      <label >Category</label>
          <div className="inputsContainer">
          <div className="checboxContainer">
                  <label>Veg</label>
                  <input type="checkbox" checked ={category.includes('veg')}  value="veg" onChange={handleCategoryChange}/>
                </div>
                <div className="checboxContainer">
                  <label>Non-Veg</label>
                  <input type="checkbox" checked ={category.includes('non-veg')} value="non-veg" onChange={handleCategoryChange}/>
                </div>
          </div>

    </div>
    <label >Offer</label>
                <input type="text" name='offer' value={offer} onChange={(e)=>setOffer(e.target.value)}/>
    <div className="checkInp">
      <label >Region</label>
          <div className="inputsContainer">
          <div className="regBoxContainer">
                  <label>South Indian</label>
                  <input type="checkbox" value="south-indian"   checked ={region.includes('south-indian')}
                  onChange={handleRegionChange}
                  />
                </div>
                <div className="regBoxContainer">
                  <label>North-Indian</label>
                  <input type="checkbox" value="north-indian"  checked ={region.includes('north-indian')}
                  onChange={handleRegionChange}
                  />
                </div>
                <div className="regBoxContainer">
                  <label>Chinese</label>
                  <input type="checkbox" value="chinese" checked ={region.includes('chinese')}
                  onChange={handleRegionChange}
                  />
                </div>
                <div className="regBoxContainer">
                  <label>Bakery</label>
                  <input type="checkbox" value="bakery" checked ={region.includes('bakery')}
                  onChange={handleRegionChange}
                  />
                </div>
          </div>

    </div>
               
                <label >Firm Image</label>
                <input type="file" onChange={handleImageUpload} />
                <br />
            <div className="btnSubmit">
        <button type='submit'>Submit</button>
    </div>
           </form>}
        </div>
  )
}

export default AddFirm
