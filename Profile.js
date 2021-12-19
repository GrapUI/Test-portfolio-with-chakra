import React from 'react'
import { Icon } from '@chakra-ui/icon'
import { useMediaQuery } from '@chakra-ui/media-query'
import { Flex, Box, Heading, Text } from '@chakra-ui/layout'
import { DiCodeBadge, DiWebplatform, DiCodeigniter } from 'react-icons/di'


function Profile() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");


    return (
        <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%" maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}>
            <Box alignSelf="center" px="32" py="16">
                <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
                    7+
                </Heading>
                <Text fontSize="2xl" color="gray.400">Years of Experience</Text>
            </Box>
            <Box alignSelf="center" px="32" py="16">
                <Text fontWeight="bold" fontSize="2xl">
                    Product Designer and Developer, specialized in mobile app development.
                </Text>
                <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
                    <Flex rounded="xl" direction="column" mt={4} bg="gray.100" h="30vh" w="30vh" justify="flex-end" onClick={() => window.open("https://drive.google.com/drive/folders/15jSsv7Z3F41Bttvd461bpQR24X5DIo04?usp=sharing")} _hover={{bg: "blue.400",}}>
                        <Icon color="black" p="4" as={DiCodeBadge} w="24" h="24" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            Certifications
                        </Text>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0} bg="gray.100" h="30vh" w="30vh" justify="flex-end" onClick={() => window.open("https://www.behance.net/guilhermoreira28")} _hover={{bg: "blue.400",}}>
                        <Icon color="black" p="4" as={DiCodeigniter} w="24" h="24" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            Design projects
                        </Text>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="30vh" w="30vh" justify="flex-end"
                        _hover={{ bg: "blue.400", }}>
                        <Icon as={DiWebplatform} p="4" w="24" h="24" color="black" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            Web Apps
                        </Text>
                    </Flex>
                </Flex>
            </Box>

        </Flex>
    )
}

export default Profile
