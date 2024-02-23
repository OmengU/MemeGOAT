import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { useState } from "react";
import { createRoom } from "../endpoints";
import { CreateRoomDto } from "../../global";

type Props = {
    isOpen: boolean,
    onClose: () => void,
}

const CreateRoomModal = ({ isOpen, onClose}: Props) => {
    const [name, setName] = useState<string>("");
    const [rounds, setRounds] = useState<number>();
    
    return <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalCloseButton />
            <ModalHeader>Create Room</ModalHeader>
            <ModalBody pb={6}>
                <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input placeholder='Name' value={name} onChange={(event) => setName(event.target.value)} />
                    <FormLabel>Rounds</FormLabel>
                    <Input placeholder='Rounds' type="number" value={rounds} onChange={(event) => setRounds(+event.target.value)} />
                </FormControl>
            </ModalBody>

            <ModalFooter>
                <Button colorScheme='purple' mr={3} isDisabled={name == "" || rounds == undefined} onClick={async (event) => {
                    event.preventDefault();

                    if(name && rounds){
                        const dto: CreateRoomDto = {
                            name: name,
                            rounds: rounds,
                            playerId: localStorage.getItem('id') ?? ""
                        }
                        await createRoom(dto).then((room) => {
                            // redirect to page where game is then started on button press
                            onClose();
                        })
                    }
                    
                    
                }}>
                    Create
                </Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
}
export default CreateRoomModal;