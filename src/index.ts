import * as express from 'express'
const exp = require('express')
const app =  exp()

app.get("/",(req:any,res:any)=>{
    try {
        return res.status(200).send({
            fruits:[
                {
                    name:'Apple',
                    color:'Red or Green'
                },
                {
                    name:'Mango',
                    color:'Yellow'
                },
                {
                    name:'Pineapple',
                    color:'Yellow or green'
                },
                {
                    name:'Grapes',
                    color:'Black or Green'
                }
            ]
        })
    } catch (error) {
        console.log("Global Error : ",error)
    }
})

app.listen(3000)


