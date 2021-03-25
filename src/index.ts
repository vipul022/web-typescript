import {User} from "./models/User"
import axios from 'axios'


const user =  new User({name: "new carl", age: 32})

// user.set({name: "carl", age: 30})
// user.save()
// user.set({name: 'surbhi', age: 20})
// user.fetch()
// user.set({name: 'vipul'})
// console.log(user.get('name'))

// // console.log(user.get('age'))

// user.on('click', ()=>{
//   console.log('click1')
// })

// user.on('click', ()=>{
//   console.log('click2')
// })
// user.on('save', ()=>{
//   console.log('save')
// })

// user.trigger('click')