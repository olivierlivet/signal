import React from 'react'
import {
    Box,
    Flex,
    Heading,
    Text
} from '@chakra-ui/react'
const Projects = () => (
    <Flex
        bg='blue.200'
        p={ '2rem' }
        maxH='100vh'
        overflow='scroll'
    >
        <Box
            mx='auto'
            maxW='800px'
            w={{ base: '100%', lg:'800px'}}
        > 
            <Box
                mt='-2rem'
                mx='-2rem'
                mb='2rem'
                bg='blue.100' p={ 20 }>
                Illustration
            </Box>
            <Heading mb={10}>Projects</Heading>
            <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum consequat arcu, quis imperdiet quam. Etiam ut consectetur odio. Morbi neque augue, mollis vitae condimentum ut, tincidunt vel leo. Morbi porttitor lacus at efficitur cursus. Morbi vulputate purus sed erat efficitur consectetur. Fusce volutpat mi justo, suscipit facilisis enim efficitur a. Phasellus sit amet tincidunt quam. Donec ac porta mi. Nulla pretium ipsum a elit mollis tempor. Suspendisse interdum tincidunt enim. Aenean et eleifend eros, et tincidunt libero. Nunc arcu quam, dapibus ac lobortis a, commodo at mi.
            </Text>
            <Text>
            Praesent at ante quis odio feugiat ultrices. Pellentesque accumsan at sem ac aliquet. Donec aliquam sem auctor, commodo orci nec, dignissim orci. Aliquam at sagittis nulla. Fusce placerat suscipit turpis, egestas blandit ligula sodales quis. Maecenas consectetur sem libero. Maecenas luctus pellentesque leo sit amet auctor. In nisl turpis, mattis ut mauris in, pharetra mollis justo. Nullam quis scelerisque elit.
            </Text>
            <Text>
            Aliquam nec justo metus. Aliquam fermentum, augue id eleifend blandit, diam justo sagittis neque, eget faucibus dui erat laoreet ex. Duis vestibulum mattis mi ut placerat. Phasellus rhoncus sollicitudin elit, eget accumsan massa rhoncus et. Nam ullamcorper nisl lacus, eget ullamcorper massa finibus id. Mauris eget ipsum egestas, interdum nibh in, dapibus nulla. Aliquam vel suscipit sapien. Aliquam non eleifend augue. Proin congue sollicitudin augue id porta. Nunc rutrum mauris urna, ac lobortis sapien ultrices vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed dictum nunc vel eros tincidunt, ac ornare ex bibendum. Vivamus vitae quam justo. Sed cursus vehicula urna eget consequat. Cras posuere, neque vitae vestibulum rutrum, orci metus blandit sapien, ut blandit nisi enim ut nulla. Morbi consectetur felis non ornare aliquam.
            </Text>
            <Text>
            Morbi commodo eleifend erat ac fermentum. Proin eleifend, libero at viverra finibus, leo lacus tempor lorem, at suscipit elit augue at justo. Maecenas faucibus sagittis imperdiet. Integer nec finibus tellus. Nulla vestibulum, odio vel dictum luctus, justo orci efficitur arcu, in placerat dolor arcu et augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras ante eros, tempor et pretium et, lacinia sagittis magna. Quisque enim ante, semper vitae aliquet ac, luctus at ipsum.
            </Text>
        </Box>
        
    </Flex>
)
export default Projects