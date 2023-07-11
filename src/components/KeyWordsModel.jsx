import { Button, CircularProgress, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react"


export const KeyWordsModel = ({keyword, loading, isOpen, closeModal}) => {
  return (
    <>
        <Modal isOpen={isOpen} onClose={closeModal}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>
                    Keywords:
                </ModalHeader>
                <ModalCloseButton/>
                <ModalBody display='flex' alignItems='center' justifyContent='center'>
                    {loading ? (<CircularProgress isIndeterminate color='blue.300'></CircularProgress>): (<Text>{keyword}</Text>)}
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={closeModal}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>

        </Modal>
    </>
  )
}
