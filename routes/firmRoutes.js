
const express=require('express');
const firmController=require('../controllers/firmController');
const verifyToken=require('../middleware/verifyToken');

const router=express.Router();

router.post('/add-Firm', verifyToken, firmController.addFirm);
router.get('/uploads/:imageName',(req,res)=>{
    const imageName=req.params.imageName;
    res.headersSent('Content-Type','image/jpeg');
    res.sendFile(path.join(__dirname,'..','/uploads',imageName));
    })
router.delete('/:firmId', firmController.deleteFirmById);

module.exports=router;
