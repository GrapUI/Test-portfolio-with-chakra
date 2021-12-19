import React from 'react'
import { Button } from '@chakra-ui/button'
import { useColorMode } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/image'
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout'
import { useMediaQuery } from '@chakra-ui/media-query'

function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Stack>
            <Circle position="absolute" bg="blue.100" opacity="0.1"
                w="250px" h="250px" alignSelf="flex-end" />
            <Flex direction={isNotSmallerScreen ? "row" : "column"} spacing="200px" p={isNotSmallerScreen ? "32" : "0"} alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                    <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>
                    <Text fontSize="6xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text' >Guilherme Moreira</Text>
                    <Text color={isDark ? "gray.200" : "gray.500"}>GDE - Front-end dev, UI/UX & Enterpreneur
                    </Text>
                    <Button mt={8} colorScheme="blue" onClick={() => window.open("https://github.com/Hydro-GMVB")}>
                    Hire Me
                    </Button>
                </Box>
                <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"} mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full' backgroundColor="transparent" boxShadow="lg" boxSize="300px" src='https://avatars.githubusercontent.com/u/95253928' />
            </Flex>
        </Stack>
    )
}

export default Header

