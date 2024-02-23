import { Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { allRooms } from "../endpoints";
import { Room } from "../../global";

type Props = {
    isOpen: boolean,
    onClose: () => void,
}

const JoinRoomModal = ({ isOpen, onClose}: Props) => {
    const [rooms, setRooms] = useState<Room[]>([]);

    useEffect(() => {
        allRooms().then((r) =>  {
            setRooms(r);
        })
    })
    
    return <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalCloseButton />
            <ModalHeader>Join Room</ModalHeader>
            <ModalBody>
                <Flex direction={"column"} justify={"center"} align={"center"} gap={"1.5rem"}>
                   {rooms.map((room) =>
                        <Button colorScheme="purple">{room.name}</Button>
                   )}
                </Flex>
            </ModalBody>
        </ModalContent>
    </Modal>
}
export default JoinRoomModal;