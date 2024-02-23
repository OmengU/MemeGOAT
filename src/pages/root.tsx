import { Button, ButtonGroup, Flex, Image, Spacer, Text, useDisclosure } from "@chakra-ui/react";
import goat from "../assets/goat.png"
import { useState } from "react";
import RegisterModal from "./components/RegisterModal";
import JoinRoomModal from "./components/JoinRoomModal";
import CreateRoomModal from "./components/CreateRoomModal";

const Root = () => {
    const [player, setPlayer] = useState<string>("");
    const [avatar, setAvatar] = useState<string>("");

    const { isOpen: isOpenPlayer, onOpen: onOpenPlayer, onClose: onClosePlayer } = useDisclosure()
    const { isOpen: isOpenRoomCreate, onOpen: onOpenRoomCreate, onClose: onCloseRoomCreate } = useDisclosure()
    const { isOpen: isOpenRoomJoin, onOpen: onOpenRoomJoin, onClose: onCloseRoomJoin } = useDisclosure()

    return <>
        <Flex direction={"column"} h={"100dvh"} w={"100vw"} justify={"start"} align={"center"}>
            <Flex direction={"row"} h={"fit-content"} w={"100%"} justify={"space-between"}  align={"center"} p={"1.5rem"} pb={".5rem"} borderBottom={"4px solid #d6bcfa"} borderBottomRadius={"15px"}>
                <Flex align={"center"} gap={"1.5rem"}>
                    <Image src={goat} boxSize={"4.5rem"} />
                    <Text fontSize={"4xl"}>Become the GOAT</Text>
                </Flex>
                <Spacer></Spacer>
                <Button colorScheme="purple" size={"lg"} isDisabled={player != ""} onClick={onOpenPlayer}>{player != "" ? `logged in as ${player} ${avatar != "" ? <Image src="avatar" /> : null }` : "Register yourself to start"}</Button>
            </Flex>
            <Flex direction={"column"} h={"80dvh"} w={{base: "100vw", md: "25vw"}} justify={"center"}>
            <ButtonGroup display={"flex"} flexDirection={"column"} gap={"1.5rem"} spacing={"0px"}>
                <Button colorScheme="pink" w={"100%"} isDisabled={player == ""} onClick={onOpenRoomJoin}>Join Room</Button>
                <Button colorScheme="cyan" w={"100%"} isDisabled={player == ""} onClick={onOpenRoomCreate}>Create Room</Button>
            </ButtonGroup>
            </Flex>
        </Flex>
        <RegisterModal isOpen={isOpenPlayer} onClose={onClosePlayer} setPlayer={setPlayer} setAvatar={setAvatar} />
        <JoinRoomModal isOpen={isOpenRoomJoin} onClose={onCloseRoomJoin} />
        <CreateRoomModal isOpen={isOpenRoomCreate} onClose={onCloseRoomCreate} />
    </>
}
export default Root;