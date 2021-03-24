import {User} from "./models/User"

const user =  new User({})

user.set({name: 'vipul'})
console.log(user.get('name'))

// console.log(user.get('age'))

user.on('click', ()=>{
  console.log('click1')
})
user.on('click', ()=>{
  console.log('click2')
})
user.on('save', ()=>{
  console.log('save')
})

user.trigger('click')