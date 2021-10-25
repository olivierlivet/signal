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
        bg='black'
      >
        <Helmet>
          <title>Going public ©®</title>
        </Helmet>

        

       <Box
        as='video'
        autoPlay
        loop
        muted
        playsInline
        src='./going-public-launch.mp4'

        position='absolute'
        top='0'
        bottom='0'
        left='0'
        right='0'

        objectFit='cover'

        minW='100%'
        minH='100%'

        w='100vw'
        h='100vh'
      />

      </Flex>
    </ChakraProvider>
  );
}

export default App;
