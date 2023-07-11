import { Box, Container } from "@chakra-ui/react"
import { useState } from "react"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { KeyWordsModel } from "./components/KeyWordsModel"
import { TextInput } from "./components/TextInput"




const url = 'https://api.openai.com/v1/completions'

const App = () => {
  const [keyword, setKeyword] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)


  const extractKeyWords= async (text) => {
    setLoading(true)
    setIsOpen(true)

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_OPENIA_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt:
          'Extrae las palabras claves del texto. Converti la primer letra de cada palabra en mayusculas y separaas con una coma(,)\n\n' +
          text +
          '',
        temperature: 0.5,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.8,
        presence_penalty: 0.0,
      }),
    };

    try {
    
      const response = await fetch(url, options)
      const json = await response.json()

      setKeyword(json.choices[0].text.trim())
      setLoading(false)
      
    } catch (error) {
      console.log(error)
    }
  }

  const closeModal = () =>{
    setIsOpen(false)
  }

  return (
    <Box bg='blue.600' color='white' height='100vh' paddingTop='130'>
      <Container
      maxW='3xl' centerContent>
        <Header></Header> 
        <TextInput extractKeyWords={extractKeyWords}></TextInput>
       <KeyWordsModel keyword={keyword} loading={loading} isOpen={isOpen} closeModal={closeModal}></KeyWordsModel>
        <Footer></Footer>
      </Container>
    </Box>
  )
}

export default App