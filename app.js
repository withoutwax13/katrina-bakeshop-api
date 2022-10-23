const express = require('express')
const app = express()
const PORT = 8000

app.use(express.json())
const store = require('./database').store

// get all store items
app.get('/api/store', (req, res)=>{
    res.send(store)
})

// get a store item matching an ID param
app.get('/api/store/search/byID/:id', (req, res)=>{
    var storeProductItem = store.filter(storeItem=>storeItem.id === Number(req.params.id))
    if(storeProductItem.length === 0){
        res.status(404)
        res.send({message: "Item not found", data: null})
    }else{
        res.status(200)
        res.send({message: "Result found!", data: storeProductItem})
    }
})

// get store items matching item type
app.get('/api/store/search/byType/:type', (req, res)=>{
    var storeProductItems = store.filter(storeItem=>storeItem.type === req.params.type)
    if(storeProductItems.length === 0){
        res.status(404)
        res.send({message: "Item not found", data: null})
    }else{
        res.status(200)
        res.send({message: "Result found!", data: storeProductItems})
    }
})

// change data from item matched with an ID

app.put('/api/store/change/:id', (req, res)=>{
    var targetItem = store.filter(storeItem => storeItem.id === Number(req.params.id))
    if(targetItem.length === 0){
        res.status(404)
        res.send({message: "Item not found", data: null})
    }else{
        targetItem = targetItem[0]
        targetItem.id = req.body.id || targetItem.id
        targetItem.type = req.body.type || targetItem.type
        targetItem.name = req.body.name || targetItem.name
        targetItem.price = req.body.price || targetItem.price
        targetItem.defaultCurrency = req.body.defaultCurrency || targetItem.defaultCurrency
        targetItem.productDescription = req.body.productDescription || targetItem.productDescription
        targetItem.imageSource = req.body.imageSource || targetItem.imageSource
        targetItem.storeStock = req.body.storeStock || targetItem.storeStock
        res.status(200)
        res.send({message: "Result found and modified", data: targetItem})
    }
})

app.listen(PORT, (err)=>{
    if(!err){
        console.log(`Running at localhost:${PORT}`)
    }else{
        console.log(`Error: ${err}`)
    }
})