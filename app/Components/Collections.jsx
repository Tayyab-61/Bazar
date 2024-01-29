"use client"
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import React from 'react'
import MenCards from './MenCards'
import WomensCard from './WomensCard'

function Collections() {
    return (
        <div >
            <Tabs isFitted variant='enclosed'>
                <TabList mb='1em'>
                    <Tab>Mens</Tab>
                    <Tab>Womens</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                       <MenCards/>
                    </TabPanel>
                    <TabPanel>
                        <MenCards/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}

export default Collections