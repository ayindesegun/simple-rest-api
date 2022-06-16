import express from 'express'
import { v4 as uuidv4 } from 'uuid';

const router = express.Router()
let users = []

//all routes from here are starting with /users
router.get('/', (req, res) => {
    res.send(users)
})
router.post('/', (req, res) => {
    const user = req.body
     
    
    users.push({...user, id: uuidv4()})
    res.send(`User with name ${user.firstName} has been added to the database`)
    console.log(user.lastName)
})

router.get('/:id', (req, res) => {
    const id = req.params.id 
    const foundUser = users.find((user) => user.id === id)
    res.send(foundUser)
    
} )
router.delete('/:id', (req, res) => {
    const { id } = req.params
    users = users.filter((user) => user.id !== id)
    res.send(`User with id ${id} and name ${req.body.lastName} have been deleted succesfully`)
})
router.patch('/:id', (req, res) => {
    const { id } = req.params
    const { firstName, lastName, age } = req.body
    const user = users.find((user) => user.id === id)
    if (firstName) user.firstName = firstName 
    if (lastName) user.lastName = lastName
    if (age) user.age = age
    res.send(` User with id ${id} updated succesfully`)
})
export default router;