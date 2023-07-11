import { Box, Flex, Image, Text } from "@chakra-ui/react"
import logo from '../assets/IA.png'


export const Footer = () => {
  return (
    <Box marginTop={50}>
        <Flex justifyContent='center' alignItems='center'>
            <Image src={logo} marginRight={1} width={8}/>
            <Text>Powered By: Open Ai</Text>
        </Flex>
    </Box>  
  )
}
