import React,{ Component, useState } from 'react';
import Helmet from 'react-helmet'
import {
  ChakraProvider,
  Box,
  Button,
  Flex,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  HStack,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { useSwipeable } from 'react-swipeable';

import SwipeableViews from 'react-swipeable-views';

import Home from './Components/home'
import Team from './Components/team'
import Projects from './Components/projects'

function App() {

  const [ index, setIndex ] = useState(1)
  return (
    <ChakraProvider theme={theme}>
      <Flex
        align='center'
        justify='center'
        wrap='nowrap'
      >
        <Helmet>
          <title>Signap Group GMBH ©®</title>
        </Helmet>

        <SwipeableViews
          index={ index }
          onChangeIndex={( value )=> {setIndex( value )}}
        >
          <Box>
            <Team transition={true} />
          </Box>
          <Box>
            <Home
              prev={()=>{ setIndex(0) }}
              next={()=>{ setIndex(2) }}
              transition={true} />
          </Box>
          <Box>
            <Projects index={1} />
          </Box>

        </SwipeableViews>


        {/* { components[component] === 'Home' ?
            <Home transition={true} />
            : components[component] === 'Team'
              ? <Team transition={true} />
                : components[component] === 'Projects'
                  ? <Projects transition={true} />
                    : null
        } */}

        {/* <Box>
          Swipe : { components[component] }
          <HStack spacing={ 10 }>
            <Button>Projects</Button>
            <Button>Team</Button>
          </HStack>
        </Box> */}
      </Flex>
      <Flex
        as='footer'
        bottom='0'
        p={ 10 }
        position='fixed'
        w='100vw'
        justify='space-between'
        display={{ base: 'none', lg:'flex'}}

      >
        <Button
          visibility={index === 0 ? 'hidden' : 'initial'}
          colorScheme="red" onClick={()=>{setIndex(index - 1) }}>
            { index === 1 ? 'Équipe' : 'Home' }
        </Button>
        <Button
          visibility={index === 2 ? 'hidden' : 'initial'}
          colorScheme="red" onClick={()=>{setIndex(index + 1) }}>
                        { index === 1 ? 'Projets' : 'Home' }

        </Button>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
