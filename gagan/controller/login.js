const User = require('../model/user')
const jwt = require('jsonwebtoken')
const secret = 'lmntrix'

async function register(req,res){
    try{
        const data = req.body
    const isUser = await User.findOne({username : data.username})
    if(isUser){
        return res.json('is already a user')
    }
    else{
    await User.create(data)
    res.redirect('/')
    }
    } catch (error) {
        res.status(500).send(error)
    }
}

async function Login(req,res){
    try {


        const data = req.body
    const isUser = await User.findOne({username : data.username})
    if(!isUser) res.send('user not found')
    if(isUser.password === req.body.password){
        const token =  jwt.sign({ userId: isUser._id }, secret);
        
        console.log(token)
        res.setHeader("x-Auth-token", token)
        // const auth = res.headers['x-Auth-token']
        // console.log(auth)
        // res.status(200).json({
        //     status: true,
        //     data: {
        //         token: token,
                
        
        //     }
            
        //  })
         res.redirect('/main')
         console.log(req.headers)
        
        
    }
    else{
    
        return res.send(data)
    }
   
    }   
    
    catch (error) {
        res.status(500).send(error)
    }
    // const isUser = await User.findOne({userName : req.body.username})
    // console.log(isUser)
}

async function userId(req,res){
    try{
        let token = req.headers["x-Auth-token"];
        console.log(token)
        res.json({token})
    }

     catch (error) {
        res.status(500).send(error)
    }
}



module.exports = {register,Login,userId}