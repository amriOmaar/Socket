const message = require("../models/message")



const addMessage = (req, res)=>{
    const {
        pseudo,
        content,
        like
    } = req.body
    const newMessage = new message({pseudo, content, like})
    newMessage.save().then((data)=>{res.status(200).json({message : "message added"})})
}


const getMessage = (req, res) => {
    message.find({}).then((data)=>{res.status(200).json({data})})
}


const like = (req, res)=>{
    const {id} = req.params
    const msg = message.findById(id).then((data)=>{
        const like = data.like + 1 
        console.log(typeof(like))
        message.findByIdAndUpdate(id, {pseudo: data.pseudo, content: data.content ,like: like}, { upsert: true, new: true })
        
    }).then((data)=>{
        res.status(200).json({data})
    })
}



module.exports = {
    addMessage,
    getMessage,
    like
}

