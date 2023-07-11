import { Button, Textarea, useToast } from "@chakra-ui/react"
import { useState } from "react"


export const TextInput = ({extractKeyWords}) => {
    const [text, setText] = useState('');

    const toast = useToast()

    const submitText = () => {
        if(text === ''){
            toast({
                title: 'El campo de texto esta vacio',
                description: 'Favor de escribir/pegar el texto a ejecutar',
                status: 'error',
                duration: 5000,
                isClosable:false,
            })
        }else{
            extractKeyWords(text)
        }
    }


  return (
    <>
        <Textarea bg='blue.300' color='white' padding={4} marginTop={6} height={200} value={text} onChange={(event)=> setText(event.target.value)}></Textarea>
        <Button bg='blue.500' color='white' marginTop={4} width='100%' _hover={{bg: 'blue.700'}} onClick={submitText}>Ejecutar</Button>
    </>
  )
}
