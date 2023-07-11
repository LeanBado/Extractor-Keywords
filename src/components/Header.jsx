import { Heading, Image, Text } from "@chakra-ui/react"
import logo from '../assets/keyword.png'

export const Header = () => {
  return (
    <>
        <Image src={logo} alt='logo' width={180} marginBottom='1rem'></Image>
        <Heading color='white' marginBottom='1rem'>Extractor de Palabras claves AI</Heading>
        <Text fontSize={25} textAlign='center'>Escribe/Pega el texto al que quieres extraer las palabras claves:</Text>
    </>
  )
}
