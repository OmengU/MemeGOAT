import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { useState } from "react";
import { createPlayer } from "../endpoints";

type Props = {
    isOpen: boolean,
    onClose: () => void,
    setPlayer: React.Dispatch<React.SetStateAction<string>>
    setAvatar: React.Dispatch<React.SetStateAction<string>>
}

const RegisterModal = ({ isOpen, onClose, setPlayer, setAvatar }: Props) => {
    const [name, setName] = useState<string>("");
    
    return <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalCloseButton />
            <ModalHeader>Create New Player</ModalHeader>
            <ModalBody pb={6}>
                <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input placeholder='Name' value={name} onChange={(event) => setName(event.target.value)} />
                </FormControl>
            </ModalBody>

            <ModalFooter>
                <Button colorScheme='purple' mr={3} isDisabled={name == ""} onClick={async (event) => {
                    event.preventDefault();

                    await createPlayer(name).then((player) => {
                        localStorage.setItem('id', player.id);
                        localStorage.setItem("avatarUrl", player.avatarUrl);
                        setPlayer(player.name);
                        setAvatar(player.avatarUrl);
                        onClose();
                    })
                }}>
                    Create Player
                </Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
}
export default RegisterModal;