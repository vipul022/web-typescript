
interface UserProps {
  // ! ? means optional
  name?: string,
  age?: number
}
// !type alias
type Callback = () => void

export class User {

  // ! events is an object with key as string and value of the key will be an array of callback function
  events: {[key: string]: Callback[]} = {}

  constructor(private data: UserProps){}

  get(propName: string): (number | string) {
    return this.data[propName]
  }

  set(update: UserProps): void{
    // this.data.name = update.name;
    // this.data.age = update.age;
// !Object.assign is inbuilt JS method which assigns all the values of update to this.data's properties
    Object.assign(this.data, update)
  
  }

  on (eventName: string, callback: Callback): void{
      const handlers = this.events[eventName] || []
      
      // console.log("handlers=>", handlers)
      handlers.push(callback)
      console.log("handlers=>", handlers)
      this.events[eventName] =  handlers
   }

   trigger(eventName: string): void{
     const handlers = this.events[eventName];
     if(!handlers || handlers.length === 0){
       return;
     }
     console.log("handlers=>", handlers)
    //  !iterate through handlers and run all callbacks
     handlers.forEach(callback => {
       callback()
     });
   }


}
