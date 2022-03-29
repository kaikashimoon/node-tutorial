const os = require ('os')

//info about current user

const user = os.userInfo()
console.log(user)

//method returns the sytmen uptime in seconds

console.log(`They System Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freMem:os.freemem()
}
console.log(currentOS)