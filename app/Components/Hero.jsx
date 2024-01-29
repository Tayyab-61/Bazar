import React from 'react'
import { Button } from '@chakra-ui/react'

function Hero() {
  return (
    <div>
      <div className="Hero w-full h-fit bg-slate-500 md:h-fit">
        <div className='p-12 pt-40 '>
          <p className="Text text-2x ml-2 md:text-2xl md:ml-4 text-teal-100"> Men Collection 2023</p>
          <h1 className="Headingh1 text-4xl md:text-8xl text-teal-300">Get Upto 50% off
            <br />
            Select Styles
          </h1>
          <Button className="mt-5" colorScheme='teal' size='lg' >
            Shop Now
          </Button>

        </div>

      </div>
    </div>
  )
}

export default Hero