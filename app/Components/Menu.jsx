'use client'
import { useDisclosure, RadioGroup, Stack, Button, Drawer, DrawerBody,DrawerOverlay, DrawerContent, DrawerHeader, placement, setPlacement, Radio, onOpen, onClose ,isOpen,  } from '@chakra-ui/react'
import React from 'react'
import {HamburgerIcon} from '@chakra-ui/icons'

function Menu() {
  
    const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('right')

  return (
    <div>
         <RadioGroup defaultValue={placement} onChange={setPlacement}>
       
      </RadioGroup>
     
      <div onClick={onOpen} className="w-8" >
      <HamburgerIcon  w={8} h={10} />
      </div>
      
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Experts Developers</DrawerHeader>
          <DrawerBody >
            <p className='border'>Home</p>
            <p className='border'>Pages</p>
            <p className='border'>Blog</p>

            <p className='border' >About</p>
            <p className='border' >Contact</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

    </div>
  )
}

export default Menu