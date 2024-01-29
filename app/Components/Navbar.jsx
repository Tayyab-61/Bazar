import React from 'react'
import Menu from './Menu'
import { Button } from '@chakra-ui/react'

function Navbar() {
  return (
    <div className="Navbar p-2 w-full h-15 bg-slate-500 ">
      <div className="flex justify-between ">
        <div >
          <Menu />
        </div>
        <div><h1 className="font-semibold text-2xl md:text-3xl text-teal-200">Online Bazar</h1></div>
        <div className="mt-1">
          <Button colorScheme='teal' size='sm' >
            Signup/Login
          </Button>
        </div>

      </div>
    </div>
  )
}

export default Navbar